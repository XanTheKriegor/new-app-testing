const SPELL_DATABASE = [
  {
    "id": "acid-splash",
    "name": "Acid Splash",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "blade-ward",
    "name": "Blade Ward",
    "level": "Cantrip",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "booming-blade",
    "name": "Booming Blade",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (5 feet)",
    "duration": "1 round",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "chill-touch",
    "name": "Chill Touch",
    "level": "Cantrip",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "control-flames",
    "name": "Control Flames",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous, 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "create-bonfire",
    "name": "Create Bonfire",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dancing-lights",
    "name": "Dancing Lights",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "druidcraft",
    "name": "Druidcraft",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "eldritch-blast",
    "name": "Eldritch Blast",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "encode-thoughts",
    "name": "Encode Thoughts",
    "level": "Cantrip",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "self",
    "duration": "8 hour",
    "classes": [],
    "source": "GGR",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "fire-bolt",
    "name": "Fire Bolt",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "friends",
    "name": "Friends",
    "level": "Cantrip",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "frostbite",
    "name": "Frostbite",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "green-flame-blade",
    "name": "Green-Flame Blade",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (5 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "guidance",
    "name": "Guidance",
    "level": "Cantrip",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "gust",
    "name": "Gust",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "infestation",
    "name": "Infestation",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "light",
    "name": "Light",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "lightning-lure",
    "name": "Lightning Lure",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (15 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mage-hand",
    "name": "Mage Hand",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "magic-stone",
    "name": "Magic Stone",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Druid",
      "Warlock"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mending",
    "name": "Mending",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "message",
    "name": "Message",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "1 round",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mind-sliver",
    "name": "Mind Sliver",
    "level": "Cantrip",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "minor-illusion",
    "name": "Minor Illusion",
    "level": "Cantrip",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mold-earth",
    "name": "Mold Earth",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous, 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "poison-spray",
    "name": "Poison Spray",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "prestidigitation",
    "name": "Prestidigitation",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "primal-savagery",
    "name": "Primal Savagery",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "produce-flame",
    "name": "Produce Flame",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "10 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ray-of-frost",
    "name": "Ray of Frost",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "resistance",
    "name": "Resistance",
    "level": "Cantrip",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sacred-flame",
    "name": "Sacred Flame",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sapping-sting",
    "name": "Sapping Sting",
    "level": "Cantrip",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shape-water",
    "name": "Shape Water",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous, 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shillelagh",
    "name": "Shillelagh",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "1 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shocking-grasp",
    "name": "Shocking Grasp",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "spare-the-dying",
    "name": "Spare the Dying",
    "level": "Cantrip",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sword-burst",
    "name": "Sword Burst",
    "level": "Cantrip",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "radius (5 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "thaumaturgy",
    "name": "Thaumaturgy",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "thorn-whip",
    "name": "Thorn Whip",
    "level": "Cantrip",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "thunderclap",
    "name": "Thunderclap",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "5 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "toll-the-dead",
    "name": "Toll the Dead",
    "level": "Cantrip",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "true-strike",
    "name": "True Strike",
    "level": "Cantrip",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 round",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "vicious-mockery",
    "name": "Vicious Mockery",
    "level": "Cantrip",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "word-of-radiance",
    "name": "Word of Radiance",
    "level": "Cantrip",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "5 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "absorb-elements",
    "name": "Absorb Elements",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 reaction (which you take when you take acid, cold, fire, lightning, or thunder damage)",
    "range": "self",
    "duration": "1 round",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "alarm",
    "name": "Alarm",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Ranger",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "animal-friendship",
    "name": "Animal Friendship",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "armor-of-agathys",
    "name": "Armor of Agathys",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "arms-of-hadar",
    "name": "Arms of Hadar",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "radius (10 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "bane",
    "name": "Bane",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "beast-bond",
    "name": "Beast Bond",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "bless",
    "name": "Bless",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "burning-hands",
    "name": "Burning Hands",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (15 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "catapult",
    "name": "Catapult",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "cause-fear",
    "name": "Cause Fear",
    "level": "Level 1",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "ceremony",
    "name": "Ceremony",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "chaos-bolt",
    "name": "Chaos Bolt",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "charm-person",
    "name": "Charm Person",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "chromatic-orb",
    "name": "Chromatic Orb",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "color-spray",
    "name": "Color Spray",
    "level": "Level 1",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "cone (15 feet)",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "command",
    "name": "Command",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "compelled-duel",
    "name": "Compelled Duel",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 bonus",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "comprehend-languages",
    "name": "Comprehend Languages",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "create-or-destroy-water",
    "name": "Create or Destroy Water",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "cure-wounds",
    "name": "Cure Wounds",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "detect-evil-and-good",
    "name": "Detect Evil and Good",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "detect-magic",
    "name": "Detect Magic",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "detect-poison-and-disease",
    "name": "Detect Poison and Disease",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "disguise-self",
    "name": "Disguise Self",
    "level": "Level 1",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dissonant-whispers",
    "name": "Dissonant Whispers",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "distort-value",
    "name": "Distort Value",
    "level": "Level 1",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "AI",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "divine-favor",
    "name": "Divine Favor",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "earth-tremor",
    "name": "Earth Tremor",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ensnaring-strike",
    "name": "Ensnaring Strike",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "entangle",
    "name": "Entangle",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "expeditious-retreat",
    "name": "Expeditious Retreat",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "faerie-fire",
    "name": "Faerie Fire",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "false-life",
    "name": "False Life",
    "level": "Level 1",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "feather-fall",
    "name": "Feather Fall",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 reaction (which you take when you or a creature within 60 feet of you falls)",
    "range": "60 feet",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "find-familiar",
    "name": "Find Familiar",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 hour",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "fog-cloud",
    "name": "Fog Cloud",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "frost-fingers",
    "name": "Frost Fingers",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (15 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "IDRotF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "gift-of-alacrity",
    "name": "Gift of Alacrity",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "8 hour",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "goodberry",
    "name": "Goodberry",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "grease",
    "name": "Grease",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "guiding-bolt",
    "name": "Guiding Bolt",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "1 round",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "hail-of-thorns",
    "name": "Hail of Thorns",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "healing-word",
    "name": "Healing Word",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "hellish-rebuke",
    "name": "Hellish Rebuke",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 reaction (which you take in response to being damaged by a creature within 60 feet of you that you can see)",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "heroism",
    "name": "Heroism",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hex",
    "name": "Hex",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 bonus",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hunters-mark",
    "name": "Hunter's Mark",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 bonus",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "ice-knife",
    "name": "Ice Knife",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "identify",
    "name": "Identify",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "illusory-script",
    "name": "Illusory Script",
    "level": "Level 1",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "10 day",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "inflict-wounds",
    "name": "Inflict Wounds",
    "level": "Level 1",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "jims-magic-missile",
    "name": "Jim's Magic Missile",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "AI",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "jump",
    "name": "Jump",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "longstrider",
    "name": "Longstrider",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Druid",
      "Ranger",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mage-armor",
    "name": "Mage Armor",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "magic-missile",
    "name": "Magic Missile",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "magnify-gravity",
    "name": "Magnify Gravity",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 round",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "protection-from-evil-and-good",
    "name": "Protection from Evil and Good",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "purify-food-and-drink",
    "name": "Purify Food and Drink",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "ray-of-sickness",
    "name": "Ray of Sickness",
    "level": "Level 1",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sanctuary",
    "name": "Sanctuary",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 bonus",
    "range": "30 feet",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "searing-smite",
    "name": "Searing Smite",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "shield",
    "name": "Shield",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 reaction (which you take when you are hit by an attack or targeted by the missile spell)",
    "range": "self",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shield-of-faith",
    "name": "Shield of Faith",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "silent-image",
    "name": "Silent Image",
    "level": "Level 1",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "silvery-barbs",
    "name": "Silvery Barbs",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 reaction (which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw)",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "SCC",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sleep",
    "name": "Sleep",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "snare",
    "name": "Snare",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "speak-with-animals",
    "name": "Speak with Animals",
    "level": "Level 1",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "10 minute",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "spellfire-flare",
    "name": "Spellfire Flare",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tashas-caustic-brew",
    "name": "Tasha's Caustic Brew",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (30 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "tashas-hideous-laughter",
    "name": "Tasha's Hideous Laughter",
    "level": "Level 1",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "tensers-floating-disk",
    "name": "Tenser's Floating Disk",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "thunderous-smite",
    "name": "Thunderous Smite",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "thunderwave",
    "name": "Thunderwave",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cube (15 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "unseen-servant",
    "name": "Unseen Servant",
    "level": "Level 1",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "wardaway",
    "name": "Wardaway",
    "level": "Level 1",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "witch-bolt",
    "name": "Witch Bolt",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wrathful-smite",
    "name": "Wrathful Smite",
    "level": "Level 1",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "zephyr-strike",
    "name": "Zephyr Strike",
    "level": "Level 1",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "aganazzars-scorcher",
    "name": "Aganazzar's Scorcher",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "aid",
    "name": "Aid",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "air-bubble",
    "name": "Air Bubble",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "24 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "AAG",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "alter-self",
    "name": "Alter Self",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "animal-messenger",
    "name": "Animal Messenger",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "arcane-lock",
    "name": "Arcane Lock",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "augury",
    "name": "Augury",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "barkskin",
    "name": "Barkskin",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "beast-sense",
    "name": "Beast Sense",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "blindness-deafness",
    "name": "Blindness/Deafness",
    "level": "Level 2",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "blur",
    "name": "Blur",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "borrowed-knowledge",
    "name": "Borrowed Knowledge",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "source": "SCC",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "branding-smite",
    "name": "Branding Smite",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "calm-emotions",
    "name": "Calm Emotions",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "cloud-of-daggers",
    "name": "Cloud of Daggers",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "continual-flame",
    "name": "Continual Flame",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "cordon-of-arrows",
    "name": "Cordon of Arrows",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "5 feet",
    "duration": "8 hour",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "crown-of-madness",
    "name": "Crown of Madness",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "darkness",
    "name": "Darkness",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "darkvision",
    "name": "Darkvision",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "death-armor",
    "name": "Death Armor",
    "level": "Level 2",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "deryans-helpful-homunculi",
    "name": "Deryan's Helpful Homunculi",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "8 hour",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "detect-thoughts",
    "name": "Detect Thoughts",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dragons-breath",
    "name": "Dragon's Breath",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dust-devil",
    "name": "Dust Devil",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "earthbind",
    "name": "Earthbind",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "elminsters-elusion",
    "name": "Elminster's Elusion",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "enhance-ability",
    "name": "Enhance Ability",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "enlarge-reduce",
    "name": "Enlarge/Reduce",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "enthrall",
    "name": "Enthrall",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "find-steed",
    "name": "Find Steed",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "10 minute",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "find-traps",
    "name": "Find Traps",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "flame-blade",
    "name": "Flame Blade",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "flaming-sphere",
    "name": "Flaming Sphere",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "fortunes-favor",
    "name": "Fortune's Favor",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "60 feet",
    "duration": "1 hour",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "gentle-repose",
    "name": "Gentle Repose",
    "level": "Level 2",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "10 day",
    "classes": [
      "Cleric",
      "Paladin",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "gift-of-gab",
    "name": "Gift of Gab",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 reaction (which you take when you speak to another creature)",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "AI",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "gust-of-wind",
    "name": "Gust of Wind",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (60 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "healing-spirit",
    "name": "Healing Spirit",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "heat-metal",
    "name": "Heat Metal",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hold-person",
    "name": "Hold Person",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "homunculus-servant",
    "name": "Homunculus Servant",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 hour",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EFA",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "immovable-object",
    "name": "Immovable Object",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "invisibility",
    "name": "Invisibility",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "jims-glowing-coin",
    "name": "Jim's Glowing Coin",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 minute",
    "classes": [
      "Wizard"
    ],
    "source": "AI",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "kinetic-jaunt",
    "name": "Kinetic Jaunt",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "SCC",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "knock",
    "name": "Knock",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "lesser-restoration",
    "name": "Lesser Restoration",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "levitate",
    "name": "Levitate",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "locate-animals-or-plants",
    "name": "Locate Animals or Plants",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "locate-object",
    "name": "Locate Object",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "magic-mouth",
    "name": "Magic Mouth",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "Permanent",
    "classes": [
      "Artificer",
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "magic-weapon",
    "name": "Magic Weapon",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "maximilians-earthen-grasp",
    "name": "Maximilian's Earthen Grasp",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "melfs-acid-arrow",
    "name": "Melf's Acid Arrow",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mind-spike",
    "name": "Mind Spike",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mirror-image",
    "name": "Mirror Image",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "misty-step",
    "name": "Misty Step",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "moonbeam",
    "name": "Moonbeam",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "nathairs-mischief",
    "name": "Nathair's Mischief",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "nystuls-magic-aura",
    "name": "Nystul's Magic Aura",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "24 hour",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "pass-without-trace",
    "name": "Pass without Trace",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "phantasmal-force",
    "name": "Phantasmal Force",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "prayer-of-healing",
    "name": "Prayer of Healing",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "10 minute",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "protection-from-poison",
    "name": "Protection from Poison",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "pyrotechnics",
    "name": "Pyrotechnics",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ray-of-enfeeblement",
    "name": "Ray of Enfeeblement",
    "level": "Level 2",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "rimes-binding-ice",
    "name": "Rime's Binding Ice",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (30 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "rope-trick",
    "name": "Rope Trick",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "scorching-ray",
    "name": "Scorching Ray",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "see-invisibility",
    "name": "See Invisibility",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shadow-blade",
    "name": "Shadow Blade",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "shatter",
    "name": "Shatter",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "silence",
    "name": "Silence",
    "level": "Level 2",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "skywrite",
    "name": "Skywrite",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "sight",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Druid",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "snillocs-snowball-swarm",
    "name": "Snilloc's Snowball Swarm",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "spider-climb",
    "name": "Spider Climb",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "spike-growth",
    "name": "Spike Growth",
    "level": "Level 2",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "spiritual-weapon",
    "name": "Spiritual Weapon",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "1 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "spray-of-cards",
    "name": "Spray of Cards",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "cone (15 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "BMT",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "suggestion",
    "name": "Suggestion",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 8 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-beast",
    "name": "Summon Beast",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "tashas-mind-whip",
    "name": "Tasha's Mind Whip",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "1 round",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "vortex-warp",
    "name": "Vortex Warp",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "SCC",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "warding-bond",
    "name": "Warding Bond",
    "level": "Level 2",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "warding-wind",
    "name": "Warding Wind",
    "level": "Level 2",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "warp-sense",
    "name": "Warp Sense",
    "level": "Level 2",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "SatO",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "web",
    "name": "Web",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wither-and-bloom",
    "name": "Wither and Bloom",
    "level": "Level 2",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "SCC",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "wristpocket",
    "name": "Wristpocket",
    "level": "Level 2",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [],
    "source": "EGW",
    "concentration": true,
    "ritual": true
  },
  {
    "id": "zone-of-truth",
    "name": "Zone of Truth",
    "level": "Level 2",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "animate-dead",
    "name": "Animate Dead",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "antagonize",
    "name": "Antagonize",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "BMT",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ashardalons-stride",
    "name": "Ashardalon's Stride",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "aura-of-vitality",
    "name": "Aura of Vitality",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "beacon-of-hope",
    "name": "Beacon of Hope",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "bestow-curse",
    "name": "Bestow Curse",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "blinding-smite",
    "name": "Blinding Smite",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "blink",
    "name": "Blink",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "cacophonic-shield",
    "name": "Cacophonic Shield",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "emanation (10 feet)",
    "duration": "Concentration, up to 10 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "call-lightning",
    "name": "Call Lightning",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "catnap",
    "name": "Catnap",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "10 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "clairvoyance",
    "name": "Clairvoyance",
    "level": "Level 3",
    "school": "Divination",
    "castingTime": "10 minute",
    "range": "1 miles",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "conjure-animals",
    "name": "Conjure Animals",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "conjure-barrage",
    "name": "Conjure Barrage",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "cone (60 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "conjure-constructs",
    "name": "Conjure Constructs",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "counterspell",
    "name": "Counterspell",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 reaction (which you take when you see a creature within 60 feet of you casting a spell)",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "create-food-and-water",
    "name": "Create Food and Water",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "crusaders-mantle",
    "name": "Crusader's Mantle",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "daylight",
    "name": "Daylight",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dispel-magic",
    "name": "Dispel Magic",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "elemental-weapon",
    "name": "Elemental Weapon",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "enemies-abound",
    "name": "Enemies Abound",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "erupting-earth",
    "name": "Erupting Earth",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "fast-friends",
    "name": "Fast Friends",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "AI",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "fear",
    "name": "Fear",
    "level": "Level 3",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "cone (30 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "feign-death",
    "name": "Feign Death",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "fireball",
    "name": "Fireball",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "flame-arrows",
    "name": "Flame Arrows",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "fly",
    "name": "Fly",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "gaseous-form",
    "name": "Gaseous Form",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "glyph-of-warding",
    "name": "Glyph of Warding",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "haste",
    "name": "Haste",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hunger-of-hadar",
    "name": "Hunger of Hadar",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hypnotic-pattern",
    "name": "Hypnotic Pattern",
    "level": "Level 3",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "incite-greed",
    "name": "Incite Greed",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "source": "AI",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "intellect-fortress",
    "name": "Intellect Fortress",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "laerals-silver-lance",
    "name": "Laeral's Silver Lance",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (120 feet)",
    "duration": "Instantaneous",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "leomunds-tiny-hut",
    "name": "Leomund's Tiny Hut",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 minute",
    "range": "hemisphere (10 feet)",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "life-transference",
    "name": "Life Transference",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "lightning-arrow",
    "name": "Lightning Arrow",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "lightning-bolt",
    "name": "Lightning Bolt",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (100 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "magic-circle",
    "name": "Magic Circle",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "10 feet",
    "duration": "1 hour",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "major-image",
    "name": "Major Image",
    "level": "Level 3",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mass-healing-word",
    "name": "Mass Healing Word",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "meld-into-stone",
    "name": "Meld into Stone",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "melfs-minute-meteors",
    "name": "Melf's Minute Meteors",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "motivational-speech",
    "name": "Motivational Speech",
    "level": "Level 3",
    "school": "Enchantment",
    "castingTime": "1 minute",
    "range": "60 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "AI",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "nondetection",
    "name": "Nondetection",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Ranger",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "phantom-steed",
    "name": "Phantom Steed",
    "level": "Level 3",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "plant-growth",
    "name": "Plant Growth",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action, 8 hour",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "protection-from-energy",
    "name": "Protection from Energy",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "pulse-wave",
    "name": "Pulse Wave",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (30 feet)",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "remove-curse",
    "name": "Remove Curse",
    "level": "Level 3",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "revivify",
    "name": "Revivify",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sending",
    "name": "Sending",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "unlimited",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "sleet-storm",
    "name": "Sleet Storm",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "slow",
    "name": "Slow",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "speak-with-dead",
    "name": "Speak with Dead",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "speak-with-plants",
    "name": "Speak with Plants",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "10 minute",
    "classes": [
      "Bard",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "spirit-guardians",
    "name": "Spirit Guardians",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "radius (15 feet)",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "spirit-shroud",
    "name": "Spirit Shroud",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "stinking-cloud",
    "name": "Stinking Cloud",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-fey",
    "name": "Summon Fey",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-lesser-demons",
    "name": "Summon Lesser Demons",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-shadowspawn",
    "name": "Summon Shadowspawn",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-undead",
    "name": "Summon Undead",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sylun-s-viper",
    "name": "Syluné's Viper",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "1 hour",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "thunder-step",
    "name": "Thunder Step",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tidal-wave",
    "name": "Tidal Wave",
    "level": "Level 3",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tiny-servant",
    "name": "Tiny Servant",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tongues",
    "name": "Tongues",
    "level": "Level 3",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "vampiric-touch",
    "name": "Vampiric Touch",
    "level": "Level 3",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-sand",
    "name": "Wall of Sand",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-water",
    "name": "Wall of Water",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "water-breathing",
    "name": "Water Breathing",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "24 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "water-walk",
    "name": "Water Walk",
    "level": "Level 3",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Ranger",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "wind-wall",
    "name": "Wind Wall",
    "level": "Level 3",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "arcane-eye",
    "name": "Arcane Eye",
    "level": "Level 4",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "aura-of-life",
    "name": "Aura of Life",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "aura-of-purity",
    "name": "Aura of Purity",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "backlash",
    "name": "Backlash",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 reaction (which you take in response to taking damage)",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "banishment",
    "name": "Banishment",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "blight",
    "name": "Blight",
    "level": "Level 4",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "charm-monster",
    "name": "Charm Monster",
    "level": "Level 4",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "compulsion",
    "name": "Compulsion",
    "level": "Level 4",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "confusion",
    "name": "Confusion",
    "level": "Level 4",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "conjure-minor-elementals",
    "name": "Conjure Minor Elementals",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "conjure-woodland-beings",
    "name": "Conjure Woodland Beings",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "control-water",
    "name": "Control Water",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "death-ward",
    "name": "Death Ward",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dimension-door",
    "name": "Dimension Door",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "500 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "divination",
    "name": "Divination",
    "level": "Level 4",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "dominate-beast",
    "name": "Dominate Beast",
    "level": "Level 4",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "doomtide",
    "name": "Doomtide",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "elemental-bane",
    "name": "Elemental Bane",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "evards-black-tentacles",
    "name": "Evard's Black Tentacles",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "fabricate",
    "name": "Fabricate",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "10 minute",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "find-greater-steed",
    "name": "Find Greater Steed",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "10 minute",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "fire-shield",
    "name": "Fire Shield",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "freedom-of-movement",
    "name": "Freedom of Movement",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "gate-seal",
    "name": "Gate Seal",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "60 feet",
    "duration": "24 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "SatO",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "giant-insect",
    "name": "Giant Insect",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "grasping-vine",
    "name": "Grasping Vine",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "gravity-sinkhole",
    "name": "Gravity Sinkhole",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "greater-invisibility",
    "name": "Greater Invisibility",
    "level": "Level 4",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "guardian-of-faith",
    "name": "Guardian of Faith",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "guardian-of-nature",
    "name": "Guardian of Nature",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "hallucinatory-terrain",
    "name": "Hallucinatory Terrain",
    "level": "Level 4",
    "school": "Illusion",
    "castingTime": "10 minute",
    "range": "300 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ice-storm",
    "name": "Ice Storm",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "leomunds-secret-chest",
    "name": "Leomund's Secret Chest",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "locate-creature",
    "name": "Locate Creature",
    "level": "Level 4",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mordenkainens-faithful-hound",
    "name": "Mordenkainen's Faithful Hound",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mordenkainens-private-sanctum",
    "name": "Mordenkainen's Private Sanctum",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "10 minute",
    "range": "120 feet",
    "duration": "24 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "otilukes-resilient-sphere",
    "name": "Otiluke's Resilient Sphere",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "phantasmal-killer",
    "name": "Phantasmal Killer",
    "level": "Level 4",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "polymorph",
    "name": "Polymorph",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "raulothims-psychic-lance",
    "name": "Raulothim's Psychic Lance",
    "level": "Level 4",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "shadow-of-moil",
    "name": "Shadow of Moil",
    "level": "Level 4",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sickening-radiance",
    "name": "Sickening Radiance",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "spellfire-storm",
    "name": "Spellfire Storm",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "spirit-of-death",
    "name": "Spirit of Death",
    "level": "Level 4",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "BMT",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "staggering-smite",
    "name": "Staggering Smite",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "stone-shape",
    "name": "Stone Shape",
    "level": "Level 4",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "stoneskin",
    "name": "Stoneskin",
    "level": "Level 4",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Druid",
      "Ranger",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "storm-sphere",
    "name": "Storm Sphere",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-aberration",
    "name": "Summon Aberration",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-construct",
    "name": "Summon Construct",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-elemental",
    "name": "Summon Elemental",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Ranger",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-greater-demon",
    "name": "Summon Greater Demon",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "vitriolic-sphere",
    "name": "Vitriolic Sphere",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "wall-of-fire",
    "name": "Wall of Fire",
    "level": "Level 4",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "watery-sphere",
    "name": "Watery Sphere",
    "level": "Level 4",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "alustriels-mooncloak",
    "name": "Alustriel's Mooncloak",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "emanation (20 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "animate-objects",
    "name": "Animate Objects",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "antilife-shell",
    "name": "Antilife Shell",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "radius (10 feet)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "awaken",
    "name": "Awaken",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "8 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "banishing-smite",
    "name": "Banishing Smite",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "bigbys-hand",
    "name": "Bigby's Hand",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "circle-of-power",
    "name": "Circle of Power",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "cloudkill",
    "name": "Cloudkill",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "commune",
    "name": "Commune",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "1 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "commune-with-nature",
    "name": "Commune with Nature",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "cone-of-cold",
    "name": "Cone of Cold",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (60 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "conjure-elemental",
    "name": "Conjure Elemental",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "conjure-volley",
    "name": "Conjure Volley",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "contact-other-plane",
    "name": "Contact Other Plane",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "contagion",
    "name": "Contagion",
    "level": "Level 5",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "7 day",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "control-winds",
    "name": "Control Winds",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "create-spelljamming-helm",
    "name": "Create Spelljamming Helm",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Wizard"
    ],
    "source": "AAG",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "creation",
    "name": "Creation",
    "level": "Level 5",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "Special",
    "classes": [
      "Artificer",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "danse-macabre",
    "name": "Danse Macabre",
    "level": "Level 5",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dawn",
    "name": "Dawn",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "destructive-wave",
    "name": "Destructive Wave",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "radius (30 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dispel-evil-and-good",
    "name": "Dispel Evil and Good",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dominate-person",
    "name": "Dominate Person",
    "level": "Level 5",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dream",
    "name": "Dream",
    "level": "Level 5",
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "special",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "enervation",
    "name": "Enervation",
    "level": "Level 5",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "far-step",
    "name": "Far Step",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "flame-strike",
    "name": "Flame Strike",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "geas",
    "name": "Geas",
    "level": "Level 5",
    "school": "Enchantment",
    "castingTime": "1 minute",
    "range": "60 feet",
    "duration": "30 day",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "greater-restoration",
    "name": "Greater Restoration",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "hallow",
    "name": "Hallow",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "24 hour",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "hold-monster",
    "name": "Hold Monster",
    "level": "Level 5",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "holy-weapon",
    "name": "Holy Weapon",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "immolation",
    "name": "Immolation",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "infernal-calling",
    "name": "Infernal Calling",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "insect-plague",
    "name": "Insect Plague",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "legend-lore",
    "name": "Legend Lore",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "10 minute",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "maelstrom",
    "name": "Maelstrom",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mass-cure-wounds",
    "name": "Mass Cure Wounds",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mislead",
    "name": "Mislead",
    "level": "Level 5",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "modify-memory",
    "name": "Modify Memory",
    "level": "Level 5",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "negative-energy-flood",
    "name": "Negative Energy Flood",
    "level": "Level 5",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "passwall",
    "name": "Passwall",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "planar-binding",
    "name": "Planar Binding",
    "level": "Level 5",
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "60 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "raise-dead",
    "name": "Raise Dead",
    "level": "Level 5",
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Paladin"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "rarys-telepathic-bond",
    "name": "Rary's Telepathic Bond",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "reincarnate",
    "name": "Reincarnate",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "scrying",
    "name": "Scrying",
    "level": "Level 5",
    "school": "Divination",
    "castingTime": "10 minute",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "seeming",
    "name": "Seeming",
    "level": "Level 5",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "skill-empowerment",
    "name": "Skill Empowerment",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "songals-elemental-suffusion",
    "name": "Songal's Elemental Suffusion",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "steel-wind-strike",
    "name": "Steel Wind Strike",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Ranger",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "summon-celestial",
    "name": "Summon Celestial",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "summon-draconic-spirit",
    "name": "Summon Draconic Spirit",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "swift-quiver",
    "name": "Swift Quiver",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "touch",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "synaptic-static",
    "name": "Synaptic Static",
    "level": "Level 5",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "telekinesis",
    "name": "Telekinesis",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "teleportation-circle",
    "name": "Teleportation Circle",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "10 feet",
    "duration": "1 round",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "temporal-shunt",
    "name": "Temporal Shunt",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 reaction (taken when a creature you can see makes an attack roll or starts to cast a spell)",
    "range": "120 feet",
    "duration": "1 round",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "transmute-rock",
    "name": "Transmute Rock",
    "level": "Level 5",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Permanent",
    "classes": [
      "Artificer",
      "Druid",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tree-stride",
    "name": "Tree Stride",
    "level": "Level 5",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-force",
    "name": "Wall of Force",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-light",
    "name": "Wall of Light",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-stone",
    "name": "Wall of Stone",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Artificer",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wrath-of-nature",
    "name": "Wrath of Nature",
    "level": "Level 5",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "arcane-gate",
    "name": "Arcane Gate",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "500 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "blade-barrier",
    "name": "Blade Barrier",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "bones-of-the-earth",
    "name": "Bones of the Earth",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Instantaneous",
    "classes": [
      "Druid"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "chain-lightning",
    "name": "Chain Lightning",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "circle-of-death",
    "name": "Circle of Death",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "conjure-fey",
    "name": "Conjure Fey",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Warlock"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "contingency",
    "name": "Contingency",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "10 minute",
    "range": "self",
    "duration": "10 day",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "create-homunculus",
    "name": "Create Homunculus",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "create-undead",
    "name": "Create Undead",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dirge",
    "name": "Dirge",
    "level": "Level 6",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "emanation (60 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "disintegrate",
    "name": "Disintegrate",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "drawmijs-instant-summons",
    "name": "Drawmij's Instant Summons",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "druid-grove",
    "name": "Druid Grove",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "10 minute",
    "range": "touch",
    "duration": "24 hour",
    "classes": [
      "Druid"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "elminsters-effulgent-spheres",
    "name": "Elminster's Effulgent Spheres",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "eyebite",
    "name": "Eyebite",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "find-the-path",
    "name": "Find the Path",
    "level": "Level 6",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "Concentration, up to 1 day",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "fizbans-platinum-shield",
    "name": "Fizban's Platinum Shield",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "flesh-to-stone",
    "name": "Flesh to Stone",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "forbiddance",
    "name": "Forbiddance",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "10 minute",
    "range": "touch",
    "duration": "1 day",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": true
  },
  {
    "id": "globe-of-invulnerability",
    "name": "Globe of Invulnerability",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "radius (10 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "gravity-fissure",
    "name": "Gravity Fissure",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (100 feet)",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "guards-and-wards",
    "name": "Guards and Wards",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "10 minute",
    "range": "touch",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "harm",
    "name": "Harm",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "heal",
    "name": "Heal",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "heroes-feast",
    "name": "Heroes' Feast",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "10 minute",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "investiture-of-flame",
    "name": "Investiture of Flame",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "investiture-of-ice",
    "name": "Investiture of Ice",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "investiture-of-stone",
    "name": "Investiture of Stone",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "investiture-of-wind",
    "name": "Investiture of Wind",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "magic-jar",
    "name": "Magic Jar",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "self",
    "duration": "Permanent",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mass-suggestion",
    "name": "Mass Suggestion",
    "level": "Level 6",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mental-prison",
    "name": "Mental Prison",
    "level": "Level 6",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "move-earth",
    "name": "Move Earth",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 2 hour",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "otilukes-freezing-sphere",
    "name": "Otiluke's Freezing Sphere",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ottos-irresistible-dance",
    "name": "Otto's Irresistible Dance",
    "level": "Level 6",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "planar-ally",
    "name": "Planar Ally",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "10 minute",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "primordial-ward",
    "name": "Primordial Ward",
    "level": "Level 6",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "programmed-illusion",
    "name": "Programmed Illusion",
    "level": "Level 6",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Permanent",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "scatter",
    "name": "Scatter",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "soul-cage",
    "name": "Soul Cage",
    "level": "Level 6",
    "school": "Necromancy",
    "castingTime": "1 reaction (which you take when a humanoid you can see within 60 feet of you dies)",
    "range": "60 feet",
    "duration": "8 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "summon-fiend",
    "name": "Summon Fiend",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sunbeam",
    "name": "Sunbeam",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "line (60 feet)",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "tashas-otherworldly-guise",
    "name": "Tasha's Otherworldly Guise",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "tensers-transformation",
    "name": "Tenser's Transformation",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "transport-via-plants",
    "name": "Transport via Plants",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "1 round",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "true-seeing",
    "name": "True Seeing",
    "level": "Level 6",
    "school": "Divination",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "wall-of-ice",
    "name": "Wall of Ice",
    "level": "Level 6",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wall-of-thorns",
    "name": "Wall of Thorns",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wind-walk",
    "name": "Wind Walk",
    "level": "Level 6",
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "8 hour",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "word-of-recall",
    "name": "Word of Recall",
    "level": "Level 6",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "5 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "conjure-celestial",
    "name": "Conjure Celestial",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "create-magen",
    "name": "Create Magen",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "IDRotF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "crown-of-stars",
    "name": "Crown of Stars",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "delayed-blast-fireball",
    "name": "Delayed Blast Fireball",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "divine-word",
    "name": "Divine Word",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "30 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "draconic-transformation",
    "name": "Draconic Transformation",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "FTD",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dream-of-the-blue-veil",
    "name": "Dream of the Blue Veil",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "10 minute",
    "range": "20 feet",
    "duration": "6 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "etherealness",
    "name": "Etherealness",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "finger-of-death",
    "name": "Finger of Death",
    "level": "Level 7",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "fire-storm",
    "name": "Fire Storm",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "forcecage",
    "name": "Forcecage",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "100 feet",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mirage-arcane",
    "name": "Mirage Arcane",
    "level": "Level 7",
    "school": "Illusion",
    "castingTime": "10 minute",
    "range": "sight",
    "duration": "10 day",
    "classes": [
      "Bard",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mordenkainens-magnificent-mansion",
    "name": "Mordenkainen's Magnificent Mansion",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "300 feet",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mordenkainens-sword",
    "name": "Mordenkainen's Sword",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "plane-shift",
    "name": "Plane Shift",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "power-word-pain",
    "name": "Power Word Pain",
    "level": "Level 7",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "prismatic-spray",
    "name": "Prismatic Spray",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "cone (60 feet)",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "project-image",
    "name": "Project Image",
    "level": "Level 7",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "500 miles",
    "duration": "Concentration, up to 1 day",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "regenerate",
    "name": "Regenerate",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "resurrection",
    "name": "Resurrection",
    "level": "Level 7",
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "reverse-gravity",
    "name": "Reverse Gravity",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "100 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sequester",
    "name": "Sequester",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "simbuls-synostodweomer",
    "name": "Simbul's Synostodweomer",
    "level": "Level 7",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "1 hour",
    "classes": [],
    "source": "FRHoF",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "simulacrum",
    "name": "Simulacrum",
    "level": "Level 7",
    "school": "Illusion",
    "castingTime": "12 hour",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "symbol",
    "name": "Symbol",
    "level": "Level 7",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "Permanent",
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "teleport",
    "name": "Teleport",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "temple-of-the-gods",
    "name": "Temple of the Gods",
    "level": "Level 7",
    "school": "Conjuration",
    "castingTime": "1 hour",
    "range": "120 feet",
    "duration": "24 hour",
    "classes": [
      "Cleric"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tether-essence",
    "name": "Tether Essence",
    "level": "Level 7",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [],
    "source": "EGW",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "whirlwind",
    "name": "Whirlwind",
    "level": "Level 7",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "abi-dalzims-horrid-wilting",
    "name": "Abi-Dalzim's Horrid Wilting",
    "level": "Level 8",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "animal-shapes",
    "name": "Animal Shapes",
    "level": "Level 8",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 24 hour",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "antimagic-field",
    "name": "Antimagic Field",
    "level": "Level 8",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "sphere (10 feet)",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Cleric",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "antipathy-sympathy",
    "name": "Antipathy/Sympathy",
    "level": "Level 8",
    "school": "Enchantment",
    "castingTime": "1 hour",
    "range": "60 feet",
    "duration": "10 day",
    "classes": [
      "Bard",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "clone",
    "name": "Clone",
    "level": "Level 8",
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "control-weather",
    "name": "Control Weather",
    "level": "Level 8",
    "school": "Transmutation",
    "castingTime": "10 minute",
    "range": "radius (5 miles)",
    "duration": "Concentration, up to 8 hour",
    "classes": [
      "Cleric",
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "dark-star",
    "name": "Dark Star",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "EGW",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "demiplane",
    "name": "Demiplane",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "1 hour",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "dominate-monster",
    "name": "Dominate Monster",
    "level": "Level 8",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "earthquake",
    "name": "Earthquake",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "500 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "feeblemind",
    "name": "Feeblemind",
    "level": "Level 8",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "glibness",
    "name": "Glibness",
    "level": "Level 8",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "1 hour",
    "classes": [
      "Bard",
      "Warlock"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "holy-aura",
    "name": "Holy Aura",
    "level": "Level 8",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "holy-star-of-mystra",
    "name": "Holy Star of Mystra",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 bonus",
    "range": "self",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "FRHoF",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "illusory-dragon",
    "name": "Illusory Dragon",
    "level": "Level 8",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "incendiary-cloud",
    "name": "Incendiary Cloud",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "maddening-darkness",
    "name": "Maddening Darkness",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "maze",
    "name": "Maze",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mighty-fortress",
    "name": "Mighty Fortress",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "1 miles",
    "duration": "Instantaneous",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mind-blank",
    "name": "Mind Blank",
    "level": "Level 8",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "24 hour",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "power-word-stun",
    "name": "Power Word Stun",
    "level": "Level 8",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "reality-break",
    "name": "Reality Break",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "EGW",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "sunburst",
    "name": "Sunburst",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "telepathy",
    "name": "Telepathy",
    "level": "Level 8",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "unlimited",
    "duration": "24 hour",
    "classes": [
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "tsunami",
    "name": "Tsunami",
    "level": "Level 8",
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "sight",
    "duration": "Concentration, up to 6 round",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "astral-projection",
    "name": "Astral Projection",
    "level": "Level 9",
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "10 feet",
    "duration": "Special",
    "classes": [
      "Cleric",
      "Monk",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "blade-of-disaster",
    "name": "Blade of Disaster",
    "level": "Level 9",
    "school": "Conjuration",
    "castingTime": "1 bonus",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "TCE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "foresight",
    "name": "Foresight",
    "level": "Level 9",
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "touch",
    "duration": "8 hour",
    "classes": [
      "Bard",
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "gate",
    "name": "Gate",
    "level": "Level 9",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Cleric",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "imprisonment",
    "name": "Imprisonment",
    "level": "Level 9",
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "30 feet",
    "duration": "Permanent",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "invulnerability",
    "name": "Invulnerability",
    "level": "Level 9",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 10 minute",
    "classes": [
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "mass-heal",
    "name": "Mass Heal",
    "level": "Level 9",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "mass-polymorph",
    "name": "Mass Polymorph",
    "level": "Level 9",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "meteor-swarm",
    "name": "Meteor Swarm",
    "level": "Level 9",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "1 miles",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "power-word-heal",
    "name": "Power Word Heal",
    "level": "Level 9",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Cleric"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "power-word-kill",
    "name": "Power Word Kill",
    "level": "Level 9",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "prismatic-wall",
    "name": "Prismatic Wall",
    "level": "Level 9",
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "duration": "10 minute",
    "classes": [
      "Bard",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "psychic-scream",
    "name": "Psychic Scream",
    "level": "Level 9",
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "source": "XGE",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "ravenous-void",
    "name": "Ravenous Void",
    "level": "Level 9",
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "1000 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [],
    "source": "EGW",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "shapechange",
    "name": "Shapechange",
    "level": "Level 9",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Druid",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "storm-of-vengeance",
    "name": "Storm of Vengeance",
    "level": "Level 9",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "sight",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Druid"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "time-ravage",
    "name": "Time Ravage",
    "level": "Level 9",
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "90 feet",
    "duration": "Instantaneous",
    "classes": [],
    "source": "EGW",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "time-stop",
    "name": "Time Stop",
    "level": "Level 9",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "true-polymorph",
    "name": "True Polymorph",
    "level": "Level 9",
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "duration": "Concentration, up to 1 hour",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "true-resurrection",
    "name": "True Resurrection",
    "level": "Level 9",
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "touch",
    "duration": "Instantaneous",
    "classes": [
      "Cleric",
      "Druid"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  },
  {
    "id": "weird",
    "name": "Weird",
    "level": "Level 9",
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "duration": "Concentration, up to 1 minute",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": true,
    "ritual": false
  },
  {
    "id": "wish",
    "name": "Wish",
    "level": "Level 9",
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "self",
    "duration": "Instantaneous",
    "classes": [
      "Sorcerer",
      "Wizard"
    ],
    "source": "PHB",
    "concentration": false,
    "ritual": false
  }
];

