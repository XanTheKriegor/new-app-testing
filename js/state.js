let currentSpellTab = 'prepared';
let spellSearchQuery = '';
let detailsDefaultShown = localStorage.getItem('detailsDefaultShown') === 'true';
let activeFilters = { levels: [], schools: [], classes: [], sources: [], ritual: false, concentration: false };
let filterPanelOpen = false;
let currentCharacterId = null;
let editingCharacterId = null;
let soundsEnabled = false;
let soundsDirectoryHandle = null;
let spellSoundFiles = [];
let customSpellSounds = JSON.parse(localStorage.getItem('customSpellSounds') || '{}');
let currentSpellSoundId = null;

const ALL_SCHOOLS = ['Abjuration','Conjuration','Divination','Enchantment','Evocation','Illusion','Necromancy','Transmutation'];
const ALL_CLASSES = ['Artificer','Bard','Cleric','Druid','Paladin','Ranger','Sorcerer','Warlock','Wizard'];
const ALL_LEVELS = [0,1,2,3,4,5,6,7,8,9];
const ALL_SOURCES = ['AAG','AI','BMT','EFA','EGW','FRHoF','FTD','GGR','IDRotF','PHB','SCC','SatO','TCE','XGE'];
const PREPARED_CASTER_CLASSES = ['Wizard','Cleric','Druid','Paladin'];
