# Spell Database

This folder contains the SQLite foundation for spell categorization. The browser app still reads `js/spells.js`; `spells.db` is a normalized database generated from that file for future tooling and backend work.

## Regenerate

Run from the repository root:

```powershell
C:\python\313\python.exe db\seed_spells.py
```

The script rebuilds `db/spells.db` from `db/schema.sql` and imports `SPELL_DATABASE` from `js/spells.js`.

## Schema Shape

Core spell filtering is normalized through lookup and join tables:

- `spell_levels`, `schools`, `editions`, `sources`, and `classes`
- `spells`
- `spell_classes` for class affinity
- `tags` and `spell_tags` for flexible categories

Future mechanics tables are present for later enrichment:

- `components`, `spell_components`
- `damage_types`, `spell_damage_types`
- `conditions`, `spell_conditions`
- `saving_throws`, `spell_saving_throws`
- `areas`, `spell_areas`
- `spell_descriptions`

## Example Queries

```sql
-- Ritual spells
SELECT name FROM spells WHERE ritual = 1 ORDER BY name;

-- Wizard spells
SELECT s.name
FROM spells s
JOIN spell_classes sc ON sc.spell_id = s.id
JOIN classes c ON c.id = sc.class_id
WHERE c.name = 'Wizard'
ORDER BY s.name;

-- Level 3 Evocation spells
SELECT s.name
FROM spells s
JOIN schools school ON school.id = s.school_id
WHERE s.level_id = 3 AND school.name = 'Evocation'
ORDER BY s.name;

-- Sources by D&D edition
SELECT e.short_name, src.code, src.name
FROM sources src
JOIN editions e ON e.id = src.edition_id
ORDER BY e.short_name, src.code;

-- Concentration spells by source and edition
SELECT e.short_name, src.code, COUNT(*) AS spell_count
FROM spells s
JOIN sources src ON src.id = s.source_id
JOIN editions e ON e.id = src.edition_id
WHERE s.concentration = 1
GROUP BY e.short_name, src.code
ORDER BY e.short_name, src.code;
```
