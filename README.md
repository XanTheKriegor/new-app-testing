# Xan's Magnificent Spell Tracker

A static, single-page D&D spell tracker for managing characters, spell slots, known and prepared spells, concentration, filters, backups, and optional casting sounds.

## Run

Open `index.html` directly in a browser, or serve the repository root when local file rules get in the way:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Manual QA

There is no automated test suite yet. Before shipping behavior changes, check:

- Create, edit, open, and delete a character.
- Navigate between character selection, character sheet, and spellbook.
- Search spells and use level, school, class, source, ritual, and concentration filters.
- Add spells to Known, prepare them, unprepare them, remove them, and switch between Prepared, Known, and All tabs.
- Cast cantrips and leveled spells, including choosing an upcast slot.
- Toggle individual slots, Long Rest, and Warlock Short Rest.
- Start, replace, and manually break concentration.
- Toggle light/dark mode and details display.
- Export data and import it into a fresh browser profile or cleared local storage.
- Toggle sounds and verify built-in `sounds/wizard_male/` playback where browser audio permissions allow it. In browsers with local folder access support, also check the custom Sounds folder picker.

## Spell Database

The browser reads spell data from `js/spells.js`. The SQLite database in `db/spells.db` is generated for future tooling:

```powershell
C:\python\313\python.exe db\seed_spells.py
```
