let currentSpellTab = 'prepared';
let spellSearchQuery = '';
let detailsDefaultShown = localStorage.getItem('detailsDefaultShown') === null ? true : localStorage.getItem('detailsDefaultShown') === 'true';
let activeFilters = { levels: [], schools: [], classes: [], sources: [], castingTimes: [], ritual: false, concentration: false };
let filterPanelOpen = false;
let currentCharacterId = null;
let editingCharacterId = null;
let soundsEnabled = false;
let soundsDirectoryHandle = null;
let spellSoundFiles = [];
let customSpellSounds = JSON.parse(localStorage.getItem('customSpellSounds') || '{}');
let currentSpellSoundId = null;
let openDescriptionIds = new Set();
let manuallySetDetailIds = new Map();
let spellEditionPreferences = JSON.parse(localStorage.getItem('spellEditionPreferences') || '{}');

const ALL_SCHOOLS = ['Abjuration','Conjuration','Divination','Enchantment','Evocation','Illusion','Necromancy','Transmutation'];
const ALL_CLASSES = ['Artificer','Bard','Cleric','Druid','Paladin','Ranger','Sorcerer','Warlock','Wizard'];
const ALL_LEVELS = [0,1,2,3,4,5,6,7,8,9];
const ALL_SOURCES = ['AAG','AI','BMT','EFA','EGW','FRHoF','FTD','GGR','IDRotF','PHB','SCC','SatO','TCE','XGE'];
const ALL_CASTING_TIMES = ['Action','Bonus Action','Reaction','Longer'];
const SOURCE_NAMES = {
    AAG: "Astral Adventurer's Guide",
    AI: "Acquisitions Incorporated",
    BMT: "The Book of Many Things",
    EFA: "Eberron: Forge of the Artificer",
    EGW: "Explorer's Guide to Wildemount",
    FRHoF: "Forgotten Realms: Heroes of Faerûn",
    FTD: "Fizban's Treasury of Dragons",
    GGR: "Guildmaster's Guide to Ravnica",
    IDRotF: "Icewind Dale: Rime of the Frostmaiden",
    PHB: "Player's Handbook",
    SCC: "Strixhaven: A Curriculum of Chaos",
    SatO: "Sigil and the Outlands",
    TCE: "Tasha's Cauldron of Everything",
    XGE: "Xanathar's Guide to Everything"
};
const PREPARED_CASTER_CLASSES = ['Wizard','Cleric','Druid','Paladin'];
