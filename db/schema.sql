PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS spell_descriptions;
DROP TABLE IF EXISTS spell_areas;
DROP TABLE IF EXISTS areas;
DROP TABLE IF EXISTS spell_saving_throws;
DROP TABLE IF EXISTS saving_throws;
DROP TABLE IF EXISTS spell_conditions;
DROP TABLE IF EXISTS conditions;
DROP TABLE IF EXISTS spell_damage_types;
DROP TABLE IF EXISTS damage_types;
DROP TABLE IF EXISTS spell_components;
DROP TABLE IF EXISTS components;
DROP TABLE IF EXISTS spell_tags;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS spell_classes;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS spells;
DROP TABLE IF EXISTS sources;
DROP TABLE IF EXISTS editions;
DROP TABLE IF EXISTS schools;
DROP TABLE IF EXISTS spell_levels;

CREATE TABLE spell_levels (
    id INTEGER PRIMARY KEY,
    label TEXT NOT NULL UNIQUE,
    sort_order INTEGER NOT NULL UNIQUE
);

CREATE TABLE schools (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE editions (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    short_name TEXT NOT NULL UNIQUE,
    publisher TEXT,
    release_year INTEGER
);

CREATE TABLE sources (
    id INTEGER PRIMARY KEY,
    edition_id INTEGER NOT NULL,
    code TEXT NOT NULL UNIQUE,
    name TEXT,
    FOREIGN KEY (edition_id) REFERENCES editions(id)
);

CREATE TABLE spells (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    level_id INTEGER NOT NULL,
    school_id INTEGER NOT NULL,
    source_id INTEGER NOT NULL,
    casting_time TEXT NOT NULL,
    range_text TEXT NOT NULL,
    duration_text TEXT NOT NULL,
    concentration INTEGER NOT NULL DEFAULT 0 CHECK (concentration IN (0, 1)),
    ritual INTEGER NOT NULL DEFAULT 0 CHECK (ritual IN (0, 1)),
    FOREIGN KEY (level_id) REFERENCES spell_levels(id),
    FOREIGN KEY (school_id) REFERENCES schools(id),
    FOREIGN KEY (source_id) REFERENCES sources(id)
);

CREATE TABLE classes (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE spell_classes (
    spell_id TEXT NOT NULL,
    class_id INTEGER NOT NULL,
    PRIMARY KEY (spell_id, class_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE TABLE tags (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE spell_tags (
    spell_id TEXT NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (spell_id, tag_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE components (
    id INTEGER PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL
);

CREATE TABLE spell_components (
    spell_id TEXT NOT NULL,
    component_id INTEGER NOT NULL,
    material_text TEXT,
    consumed INTEGER NOT NULL DEFAULT 0 CHECK (consumed IN (0, 1)),
    has_cost INTEGER NOT NULL DEFAULT 0 CHECK (has_cost IN (0, 1)),
    PRIMARY KEY (spell_id, component_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (component_id) REFERENCES components(id) ON DELETE CASCADE
);

CREATE TABLE damage_types (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE spell_damage_types (
    spell_id TEXT NOT NULL,
    damage_type_id INTEGER NOT NULL,
    PRIMARY KEY (spell_id, damage_type_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (damage_type_id) REFERENCES damage_types(id) ON DELETE CASCADE
);

CREATE TABLE conditions (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE spell_conditions (
    spell_id TEXT NOT NULL,
    condition_id INTEGER NOT NULL,
    relationship TEXT NOT NULL DEFAULT 'applies',
    PRIMARY KEY (spell_id, condition_id, relationship),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (condition_id) REFERENCES conditions(id) ON DELETE CASCADE
);

CREATE TABLE saving_throws (
    id INTEGER PRIMARY KEY,
    ability TEXT NOT NULL UNIQUE
);

CREATE TABLE spell_saving_throws (
    spell_id TEXT NOT NULL,
    saving_throw_id INTEGER NOT NULL,
    PRIMARY KEY (spell_id, saving_throw_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (saving_throw_id) REFERENCES saving_throws(id) ON DELETE CASCADE
);

CREATE TABLE areas (
    id INTEGER PRIMARY KEY,
    shape TEXT NOT NULL UNIQUE
);

CREATE TABLE spell_areas (
    spell_id TEXT NOT NULL,
    area_id INTEGER NOT NULL,
    size_text TEXT,
    PRIMARY KEY (spell_id, area_id),
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE,
    FOREIGN KEY (area_id) REFERENCES areas(id) ON DELETE CASCADE
);

CREATE TABLE spell_descriptions (
    spell_id TEXT PRIMARY KEY,
    description TEXT,
    higher_level_text TEXT,
    FOREIGN KEY (spell_id) REFERENCES spells(id) ON DELETE CASCADE
);

CREATE INDEX idx_spells_level ON spells(level_id);
CREATE INDEX idx_spells_school ON spells(school_id);
CREATE INDEX idx_spells_source ON spells(source_id);
CREATE INDEX idx_spells_ritual ON spells(ritual);
CREATE INDEX idx_spells_concentration ON spells(concentration);
CREATE INDEX idx_sources_edition ON sources(edition_id);
CREATE INDEX idx_classes_name ON classes(name);
CREATE INDEX idx_spell_classes_class ON spell_classes(class_id);
CREATE INDEX idx_spell_tags_tag ON spell_tags(tag_id);
