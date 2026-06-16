from __future__ import annotations

import json
import re
import sqlite3
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DB_DIR = ROOT_DIR / "db"
SPELLS_JS = ROOT_DIR / "js" / "spells.js"
SCHEMA_SQL = DB_DIR / "schema.sql"
DATABASE = DB_DIR / "spells.db"

LEVEL_LABELS = {
    0: "Cantrip",
    1: "1st level",
    2: "2nd level",
    3: "3rd level",
    4: "4th level",
    5: "5th level",
    6: "6th level",
    7: "7th level",
    8: "8th level",
    9: "9th level",
}

DEFAULT_EDITION = {
    "name": "Dungeons & Dragons 5th Edition",
    "short_name": "D&D 5e",
    "publisher": "Wizards of the Coast",
    "release_year": 2014,
}

COMPONENTS = [
    ("V", "Verbal"),
    ("S", "Somatic"),
    ("M", "Material"),
]

SAVING_THROWS = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
]

DAMAGE_TYPES = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
]

CONDITIONS = [
    "Blinded",
    "Charmed",
    "Deafened",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious",
]

AREAS = [
    "Cone",
    "Cube",
    "Cylinder",
    "Line",
    "Radius",
    "Sphere",
]


def load_spells() -> list[dict]:
    source = SPELLS_JS.read_text(encoding="utf-8")
    match = re.search(r"const\s+SPELL_DATABASE\s*=\s*(\[.*\])\s*;?\s*$", source, re.S)
    if not match:
        raise ValueError(f"Could not find SPELL_DATABASE array in {SPELLS_JS}")
    return json.loads(match.group(1))


def level_number(level: str) -> int:
    if level == "Cantrip":
        return 0
    match = re.search(r"\d+", str(level))
    if not match:
        raise ValueError(f"Unsupported spell level: {level}")
    value = int(match.group(0))
    if value not in LEVEL_LABELS:
        raise ValueError(f"Spell level out of range: {level}")
    return value


def insert_lookup(cur: sqlite3.Cursor, table: str, column: str, value: str) -> int:
    cur.execute(f"INSERT OR IGNORE INTO {table} ({column}) VALUES (?)", (value,))
    cur.execute(f"SELECT id FROM {table} WHERE {column} = ?", (value,))
    row = cur.fetchone()
    if row is None:
        raise RuntimeError(f"Could not resolve {table}.{column}={value}")
    return int(row[0])


def insert_source(cur: sqlite3.Cursor, code: str, edition_id: int) -> int:
    cur.execute(
        "INSERT OR IGNORE INTO sources (edition_id, code) VALUES (?, ?)",
        (edition_id, code),
    )
    cur.execute("SELECT id FROM sources WHERE code = ?", (code,))
    row = cur.fetchone()
    if row is None:
        raise RuntimeError(f"Could not resolve source={code}")
    return int(row[0])


def seed_database(spells: list[dict]) -> None:
    DB_DIR.mkdir(exist_ok=True)
    if DATABASE.exists():
        try:
            DATABASE.unlink()
        except PermissionError as exc:
            raise PermissionError(
                f"Could not replace {DATABASE}. Close DBeaver or any other program using the database, "
                "then run the seed script again."
            ) from exc

    with sqlite3.connect(DATABASE) as conn:
        conn.execute("PRAGMA foreign_keys = ON")
        conn.executescript(SCHEMA_SQL.read_text(encoding="utf-8"))
        cur = conn.cursor()

        for level_id, label in LEVEL_LABELS.items():
            cur.execute(
                "INSERT INTO spell_levels (id, label, sort_order) VALUES (?, ?, ?)",
                (level_id, label, level_id),
            )

        cur.execute(
            """
            INSERT INTO editions (name, short_name, publisher, release_year)
            VALUES (?, ?, ?, ?)
            """,
            (
                DEFAULT_EDITION["name"],
                DEFAULT_EDITION["short_name"],
                DEFAULT_EDITION["publisher"],
                DEFAULT_EDITION["release_year"],
            ),
        )
        edition_id = int(cur.lastrowid)

        for code, name in COMPONENTS:
            cur.execute("INSERT INTO components (code, name) VALUES (?, ?)", (code, name))
        for ability in SAVING_THROWS:
            cur.execute("INSERT INTO saving_throws (ability) VALUES (?)", (ability,))
        for damage_type in DAMAGE_TYPES:
            cur.execute("INSERT INTO damage_types (name) VALUES (?)", (damage_type,))
        for condition in CONDITIONS:
            cur.execute("INSERT INTO conditions (name) VALUES (?)", (condition,))
        for area in AREAS:
            cur.execute("INSERT INTO areas (shape) VALUES (?)", (area,))

        for spell in spells:
            school_id = insert_lookup(cur, "schools", "name", spell["school"])
            source_id = insert_source(cur, spell["source"], edition_id)
            spell_level = level_number(spell["level"])

            cur.execute(
                """
                INSERT INTO spells (
                    id,
                    name,
                    level_id,
                    school_id,
                    source_id,
                    casting_time,
                    range_text,
                    duration_text,
                    concentration,
                    ritual
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    spell["id"],
                    spell["name"],
                    spell_level,
                    school_id,
                    source_id,
                    spell["castingTime"],
                    spell["range"],
                    spell["duration"],
                    int(bool(spell["concentration"])),
                    int(bool(spell["ritual"])),
                ),
            )

            for class_name in spell.get("classes", []):
                class_id = insert_lookup(cur, "classes", "name", class_name)
                cur.execute(
                    "INSERT INTO spell_classes (spell_id, class_id) VALUES (?, ?)",
                    (spell["id"], class_id),
                )

        conn.commit()


def print_summary(spells: list[dict]) -> None:
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        counts = {
            "spells": cur.execute("SELECT COUNT(*) FROM spells").fetchone()[0],
            "editions": cur.execute("SELECT COUNT(*) FROM editions").fetchone()[0],
            "schools": cur.execute("SELECT COUNT(*) FROM schools").fetchone()[0],
            "sources": cur.execute("SELECT COUNT(*) FROM sources").fetchone()[0],
            "classes": cur.execute("SELECT COUNT(*) FROM classes").fetchone()[0],
            "spell_classes": cur.execute("SELECT COUNT(*) FROM spell_classes").fetchone()[0],
            "ritual_spells": cur.execute("SELECT COUNT(*) FROM spells WHERE ritual = 1").fetchone()[0],
            "concentration_spells": cur.execute(
                "SELECT COUNT(*) FROM spells WHERE concentration = 1"
            ).fetchone()[0],
        }

    expected_spell_classes = sum(len(spell.get("classes", [])) for spell in spells)
    print(f"Created {DATABASE.relative_to(ROOT_DIR)}")
    print(f"spells: {counts['spells']} / expected {len(spells)}")
    print(f"spell_classes: {counts['spell_classes']} / expected {expected_spell_classes}")
    print(f"editions: {counts['editions']}")
    print(f"schools: {counts['schools']}")
    print(f"sources: {counts['sources']}")
    print(f"classes: {counts['classes']}")
    print(f"ritual_spells: {counts['ritual_spells']}")
    print(f"concentration_spells: {counts['concentration_spells']}")


def main() -> None:
    spells = load_spells()
    seed_database(spells)
    print_summary(spells)


if __name__ == "__main__":
    main()
