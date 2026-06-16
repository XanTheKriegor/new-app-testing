let currentSpellTab = 'prepared';
let spellSearchQuery = '';
let activeFilters = { levels: [], schools: [], classes: [] };
let filterPanelOpen = false;

const ALL_SCHOOLS = ['Abjuration','Conjuration','Divination','Enchantment','Evocation','Illusion','Necromancy','Transmutation'];
const ALL_CLASSES = ['Artificer','Bard','Cleric','Druid','Paladin','Ranger','Sorcerer','Warlock','Wizard'];
const ALL_LEVELS = [0,1,2,3,4,5,6,7,8,9];

function toggleFilterPanel(){
    filterPanelOpen = !filterPanelOpen;
    document.getElementById('filterPanel').style.display = filterPanelOpen ? 'block' : 'none';
    document.getElementById('filterToggleBtn').className = filterPanelOpen ? 'btn btn-green' : 'btn btn-gray';
    if(filterPanelOpen) renderFilterChips();
}

function renderFilterChips(){
    const levelsDiv = document.getElementById('filterLevels');
    const schoolsDiv = document.getElementById('filterSchools');
    const classesDiv = document.getElementById('filterClasses');

    levelsDiv.innerHTML = ALL_LEVELS.map(l => `
        <span class="filter-chip ${activeFilters.levels.includes(l) ? 'active' : ''}" onclick="toggleFilter('levels',${l})">
            ${l === 0 ? 'Cantrip' : 'Lvl ' + l}
        </span>
    `).join('');

    schoolsDiv.innerHTML = ALL_SCHOOLS.map(s => `
        <span class="filter-chip ${activeFilters.schools.includes(s) ? 'active' : ''}" onclick="toggleFilter('schools','${s}')">
            ${s}
        </span>
    `).join('');

    classesDiv.innerHTML = ALL_CLASSES.map(c => `
        <span class="filter-chip ${activeFilters.classes.includes(c) ? 'active' : ''}" onclick="toggleFilter('classes','${c}')">
            ${c}
        </span>
    `).join('');
}

function toggleFilter(type, value){
    const arr = activeFilters[type];
    const idx = arr.indexOf(value);
    if(idx === -1) arr.push(value);
    else arr.splice(idx, 1);

    const hasAny = activeFilters.levels.length || activeFilters.schools.length || activeFilters.classes.length;
    document.getElementById('filterClearBtn').style.display = hasAny ? 'block' : 'none';

    renderFilterChips();
    renderSpellCards(currentSpellTab);
}

function clearFilters(){
    activeFilters = { levels: [], schools: [], classes: [] };
    document.getElementById('filterClearBtn').style.display = 'none';
    renderFilterChips();
    renderSpellCards(currentSpellTab);
}

function spellMatchesFilters(spell){
    const lvl = getSpellLevelNum(spell.level);
    if(activeFilters.levels.length && !activeFilters.levels.includes(lvl)) return false;
    if(activeFilters.schools.length && !activeFilters.schools.includes(spell.school)) return false;
    if(activeFilters.classes.length && !spell.classes.some(c => activeFilters.classes.includes(c))) return false;
    return true;
}

function onSpellSearch(){
    spellSearchQuery = document.getElementById('spellSearchInput').value.trim().toLowerCase();
    renderSpellCards(currentSpellTab);
}


function getSpellLevelNum(levelStr){
    if(levelStr === 'Cantrip') return 0;
    const m = String(levelStr).match(/\d+/);
    return m ? parseInt(m[0]) : 0;
}

function getKnownSpells(){
    const data = JSON.parse(localStorage.getItem('knownSpells') || '{}');
    return data[currentCharacterId] || [];
}

function getPreparedSpells(){
    const data = JSON.parse(localStorage.getItem('preparedSpells') || '{}');
    return data[currentCharacterId] || [];
}

function saveKnownSpells(list){
    const data = JSON.parse(localStorage.getItem('knownSpells') || '{}');
    data[currentCharacterId] = list;
    localStorage.setItem('knownSpells', JSON.stringify(data));
}

function savePreparedSpells(list){
    const data = JSON.parse(localStorage.getItem('preparedSpells') || '{}');
    data[currentCharacterId] = list;
    localStorage.setItem('preparedSpells', JSON.stringify(data));
}

function addToBook(spellId){
    const known = getKnownSpells();
    if(!known.includes(spellId)) known.push(spellId);
    saveKnownSpells(known);
    renderSpellCards('all');
}

function removeFromBook(spellId){
    let known = getKnownSpells().filter(id => id !== spellId);
    let prepared = getPreparedSpells().filter(id => id !== spellId);
    saveKnownSpells(known);
    savePreparedSpells(prepared);
    renderSpellCards('known');
}

function prepareSpell(spellId){
    const prepared = getPreparedSpells();
    if(!prepared.includes(spellId)) prepared.push(spellId);
    savePreparedSpells(prepared);
    renderSpellCards('known');
}

function unprepareSpell(spellId){
    const prepared = getPreparedSpells().filter(id => id !== spellId);
    savePreparedSpells(prepared);
    renderSpellCards('prepared');
}

function castSpell(spellId){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    const spell = SPELL_DATABASE.find(s => s.id === spellId);
    if(!spell) return;

    const minLvl = getSpellLevelNum(spell.level);

    // Cantrip – žádný slot nepotřebuje
    if(minLvl === 0){
        playSchoolSound(spell.school, spell.id);
        return;
    }

    const slots = character.spellSlots || {};

    // Zjisti dostupné sloty od minLvl výše
    const availableLevels = [];
    for(let i = minLvl; i <= 9; i++){
        const count = (slots[i] || []).filter(s => s === true).length;
        if(count > 0) availableLevels.push({ level: i, count });
    }

    // Žádný dostupný slot
    if(availableLevels.length === 0){
        alert('Nemáš žádný volný spell slot úrovně ' + minLvl + ' ani vyšší!');
        return;
    }

    // Zobraz modal pro výběr (vždy, i když je jen jeden level)
    document.getElementById('castModalTitle').textContent = spell.name;
    document.getElementById('castModalSubtitle').textContent = 'Vyber spell slot (min. úroveň ' + minLvl + '):';

    const slotsDiv = document.getElementById('castModalSlots');
    slotsDiv.innerHTML = availableLevels.map(({level, count}) => `
        <button class="btn btn-green" onclick="confirmCast('${spellId}', ${level}); closeCastModal();">
            Slot úrovně ${level} <span style="opacity:0.7;font-size:13px;">(zbývá ${count})</span>
        </button>
    `).join('');

    const modal = document.getElementById('castModal');
    modal.classList.add('open');
}

function confirmCast(spellId, slotLevel){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    const spell = SPELL_DATABASE.find(s => s.id === spellId);
    if(!spell) return;

    const slots = character.spellSlots[slotLevel] || [];
    const idx = slots.findIndex(s => s === true);
    if(idx === -1) return;

    character.spellSlots[slotLevel][idx] = false;
    saveCharacters(characters);
    renderSpellSlotTable(character);
    playSchoolSound(spell.school, spell.id);
    renderSpellCards('prepared');
}

function closeCastModal(){
    document.getElementById('castModal').classList.remove('open');
}

function renderSpellCards(mode='all'){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    const known = getKnownSpells();
    const prepared = getPreparedSpells();

    let spells = [];

    const matchesSearch = s => !spellSearchQuery || s.name.toLowerCase().includes(spellSearchQuery);
    const matchesAll = s => matchesSearch(s) && spellMatchesFilters(s);

    if(mode === 'all'){
        spells = SPELL_DATABASE
            .filter(s => !known.includes(s.id) && matchesAll(s))
            .sort((a,b) => getSpellLevelNum(a.level) - getSpellLevelNum(b.level) || a.name.localeCompare(b.name));
    } else if(mode === 'known'){
        spells = SPELL_DATABASE
            .filter(s => known.includes(s.id) && matchesAll(s))
            .sort((a,b) => getSpellLevelNum(a.level) - getSpellLevelNum(b.level) || a.name.localeCompare(b.name));
    } else if(mode === 'prepared'){
        spells = SPELL_DATABASE
            .filter(s => prepared.includes(s.id) && matchesAll(s))
            .sort((a,b) => getSpellLevelNum(a.level) - getSpellLevelNum(b.level) || a.name.localeCompare(b.name));
    }

    if(spells.length === 0){
        const msgs = {
            all: spellSearchQuery ? 'No spells match your search.' : 'All available spells are already in your spellbook.',
            known: spellSearchQuery ? 'No spells match your search.' : 'No spells in your spellbook yet. Add some from All Spells!',
            prepared: spellSearchQuery ? 'No spells match your search.' : 'No spells prepared. Prepare some from Known Spells!'
        };
        document.getElementById('spellTabContent').innerHTML = '<p style="text-align:center;color:#aaa;padding:20px;">' + msgs[mode] + '</p>';
        return;
    }

    document.getElementById('spellTabContent').innerHTML = spells.map(spell => {
        const isPrepared = prepared.includes(spell.id);
        let actions = '';

        if(mode === 'all'){
            actions = `<button class="btn btn-green" style="width:auto;" onclick="addToBook('${spell.id}')">Add to Book</button>`;
        } else if(mode === 'known'){
            actions = `
                ${!isPrepared ? `<button class="btn btn-green" style="width:auto;" onclick="prepareSpell('${spell.id}')">Prepare</button>` : '<span style="color:#9fd19f;font-size:13px;">✔ Prepared</span>'}
                <button class="btn btn-red" style="width:auto;" onclick="removeFromBook('${spell.id}')">Remove</button>
            `;
        } else if(mode === 'prepared'){
            const lvl = getSpellLevelNum(spell.level);
            const slots = character.spellSlots || {};
            const canCast = lvl === 0 || Object.keys(slots).some(k => parseInt(k) >= lvl && slots[k].some(s => s === true));
            const hasCustomSound = customSpellSounds[spell.id] ? '🎵' : '🎵';
            const customSoundStyle = customSpellSounds[spell.id] ? 'background:#3d6b3d;' : '';
            actions = `
                <button class="btn ${canCast ? 'btn-green' : 'btn-gray'}" style="width:auto;${!canCast && lvl > 0 ? 'opacity:0.5;' : ''}" onclick="castSpell('${spell.id}')">Cast</button>
                <button class="btn btn-gray" style="width:auto;${customSoundStyle}" onclick="openSpellSoundModal('${spell.id}', '${spell.name.replace(/'/g, "\\'")}')">🎵</button>
                <button class="btn btn-gray" style="width:auto;" onclick="unprepareSpell('${spell.id}')">Unprepare</button>
            `;
        }

        return `
            <div class="spell-card" data-school="${spell.school}">
                <div class="spell-badges">
                    ${spell.concentration ? '<span class="badge">C</span>' : ''}
                    ${spell.ritual ? '<span class="badge">R</span>' : ''}
                </div>
                <div class="spell-name">${spell.name}</div>
                <div class="spell-meta">
                    ${spell.level} · ${spell.school}<br>
                    ${spell.castingTime} · Range: ${spell.range}<br>
                    Duration: ${spell.duration}
                </div>
                <div class="spell-action">
                    ${actions}
                </div>
            </div>
        `;
    }).join('');
}


let editingCharacterId = null;
let currentCharacterId = null;

    // LEVELS

    const levelSelect = document.getElementById("characterLevel");

    for(let i = 1; i <= 20; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        levelSelect.appendChild(option);
    }

    // NAVIGATION

    function showCreateCharacterPage(){
        document.getElementById("mainPage").classList.add("hidden");
        document.getElementById("createCharacterPage").classList.remove("hidden");
    }

    function returnToMainPage(){
        document.getElementById("createCharacterPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");

        clearForm();
    }

    function editCharacter(id){

        const characters = getCharacters();

        const character = characters.find(c => c.id === id);

        if(!character) return;

        editingCharacterId = id;

        document.getElementById("characterName").value = character.name;
        document.getElementById("characterClass").value = character.class;
        document.getElementById("characterLevel").value = character.level;
        document.getElementById("characterRace").value = character.race;
        document.getElementById("characterAlignment").value = character.alignment;
        document.getElementById("characterSoundSet").value = character.soundSet || '';

        document.querySelector('#createCharacterPage h2').textContent = "Edit Character";
        document.querySelector('#createCharacterPage .btn-green').textContent = "Save Character";

        showCreateCharacterPage();
    }

    
    function openCharacter(id){

        currentCharacterId = id;

        const character = getCharacters().find(c => c.id === id);
        if(!character) return;

        document.getElementById("mainPage").classList.add("hidden");
        document.getElementById("characterPage").classList.remove("hidden");

        document.getElementById("characterInfo").innerHTML = `
            <h3>${character.name}</h3>
            <p>Class: ${character.class}</p>
            <p>Level: ${character.level}</p>
            <p>Race: ${character.race}</p>
            <p>Alignment: ${character.alignment}</p>
        `;
    }

    function backToCharacterSelection(){
        document.getElementById("characterPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");
    }

    function editCurrentCharacter(){
        if(currentCharacterId){
            editCharacter(currentCharacterId);
            document.getElementById("characterPage").classList.add("hidden");
        }
    }

    function deleteCurrentCharacter(){

        if(!confirm("Delete this character?")) return;

        let characters = getCharacters().filter(c => c.id !== currentCharacterId);

        saveCharacters(characters);
        renderCharacters();

        currentCharacterId = null;

        backToCharacterSelection();
    }


function getSpellSlots(characterClass, level){
    const fullCaster = {
      1:[2],2:[3],3:[4,2],4:[4,3],5:[4,3,2],6:[4,3,3],7:[4,3,3,1],8:[4,3,3,2],9:[4,3,3,3,1],10:[4,3,3,3,2],
      11:[4,3,3,3,2,1],12:[4,3,3,3,2,1],13:[4,3,3,3,2,1,1],14:[4,3,3,3,2,1,1],15:[4,3,3,3,2,1,1,1],
      16:[4,3,3,3,2,1,1,1],17:[4,3,3,3,2,1,1,1,1],18:[4,3,3,3,3,1,1,1,1],19:[4,3,3,3,3,2,1,1,1],20:[4,3,3,3,3,2,2,1,1]
    };

    const halfCaster = {
      1:[],2:[2],3:[3],4:[3],5:[4,2],6:[4,2],7:[4,3],8:[4,3],9:[4,3,2],10:[4,3,2],
      11:[4,3,3],12:[4,3,3],13:[4,3,3,1],14:[4,3,3,1],15:[4,3,3,2],16:[4,3,3,2],
      17:[4,3,3,3,1],18:[4,3,3,3,1],19:[4,3,3,3,2],20:[4,3,3,3,2]
    };

    const warlock = {
      1:[1,1],2:[1,2],3:[2,2],4:[2,2],5:[3,2],6:[3,2],7:[4,2],8:[4,2],
      9:[5,2],10:[5,2],11:[5,3],12:[5,3],13:[5,3],14:[5,3],15:[5,3],
      16:[5,3],17:[5,4],18:[5,4],19:[5,4],20:[5,4]
    };

    if(["Wizard","Sorcerer","Cleric","Druid","Bard"].includes(characterClass))
        return fullCaster[level] || [];

    if(["Paladin","Ranger","Artificer"].includes(characterClass))
        return halfCaster[level] || [];

    if(characterClass==="Warlock")
        return warlock[level] || [];

    return [];
}

function initSpellSlots(character){
    const slotCounts = getSpellSlots(character.class, parseInt(character.level));
    const slots = {};

    if(character.class === 'Warlock'){
        const warlockLevel = slotCounts[0] || 0;
        const warlockCount = slotCounts[1] || 0;
        for(let i=1;i<=9;i++){
            slots[i] = (i === warlockLevel) ? Array(warlockCount).fill(true) : [];
        }
    } else {
        for(let i=1;i<=9;i++){
            const count = slotCounts[i-1] || 0;
            slots[i] = Array(count).fill(true);
        }
    }

    return slots;
}

function renderSpellSlotTable(character){
    if(!character.spellSlots){
        character.spellSlots = initSpellSlots(character);
    }

    let table = '<table><tr>';
    for(let i=1;i<=9;i++) table += '<th>Lvl '+i+'</th>';
    table += '</tr><tr>';

    for(let i=1;i<=9;i++){
        table += '<td>';
        const levelSlots = character.spellSlots[i] || [];
        if(levelSlots.length === 0){
            table += '-';
        } else {
            levelSlots.forEach((available, idx) => {
                table += `<span class="slot-dot" onclick="toggleSlot(${i},${idx})">${available ? '🟢' : '⚫'}</span>`;
            });
        }
        table += '</td>';
    }

    table += '</tr></table>';
    document.getElementById("spellslotTable").innerHTML = '<div class="slot-table-wrapper">' + table + '</div>';
}

function openSpellbook(){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    // Inicializace slotů pokud ještě neexistují
    if(!character.spellSlots){
        character.spellSlots = initSpellSlots(character);
        saveCharacters(characters);
    }

    // Nastav výchozí filtr podle classy postavy
    activeFilters = { levels: [], schools: [], classes: [character.class] };
    document.getElementById('filterClearBtn').style.display = 'block';

    document.getElementById("characterPage").classList.add("hidden");
    document.getElementById("spellbookPage").classList.remove("hidden");
    document.getElementById("spellbookTitle").textContent = character.name + " - Spellbook";

    renderSpellSlotTable(character);
    showSpellTab('prepared');
}

function backToCharacterFromSpellbook(){
    document.getElementById("spellbookPage").classList.add("hidden");
    document.getElementById("characterPage").classList.remove("hidden");
}



let soundsEnabled = true;
let soundsDirectoryHandle = null;
let spellSoundFiles = [];
let customSpellSounds = JSON.parse(localStorage.getItem('customSpellSounds') || '{}');
let currentSpellSoundId = null;

async function pickSoundsFolder(){
    try {
        soundsDirectoryHandle = await window.showDirectoryPicker({ mode: 'read' });
        document.getElementById('soundsFolderBtn').textContent = '📁 ' + soundsDirectoryHandle.name;
        document.getElementById('soundsFolderBtn').className = 'btn btn-green';

        // Načti seznam mp3 souborů rekurzivně
        spellSoundFiles = await listMp3Files(soundsDirectoryHandle);
        console.log('Nalezeno souborů:', spellSoundFiles.length);
    } catch(e) {
        if(e.name !== 'AbortError') console.warn('Složku se nepodařilo otevřít:', e);
    }
}

async function listMp3Files(dirHandle, path=''){
    const files = [];
    for await (const entry of dirHandle.values()){
        if(entry.kind === 'file' && entry.name.toLowerCase().endsWith('.mp3')){
            files.push({ name: entry.name, path: path ? path + '/' + entry.name : entry.name, handle: entry });
        } else if(entry.kind === 'directory'){
            const sub = await listMp3Files(entry, path ? path + '/' + entry.name : entry.name);
            files.push(...sub);
        }
    }
    return files;
}

function openSpellSoundModal(spellId, spellName){
    if(!soundsDirectoryHandle){
        alert('Nejdřív vyber složku sounds tlačítkem 📁 Sounds folder');
        return;
    }

    currentSpellSoundId = spellId;
    document.getElementById('spellSoundModalTitle').textContent = '🎵 ' + spellName;

    const currentSound = customSpellSounds[spellId];
    const clearBtn = document.getElementById('spellSoundClearBtn');
    clearBtn.style.display = currentSound ? 'block' : 'none';
    if(currentSound) clearBtn.textContent = '🗑 Odebrat vlastní zvuk (' + currentSound + ')';

    const list = document.getElementById('spellSoundFileList');
    if(spellSoundFiles.length === 0){
        list.innerHTML = '<p style="color:#aaa;text-align:center;">Žádné mp3 soubory nenalezeny.</p>';
    } else {
        list.innerHTML = spellSoundFiles.map(f => `
            <button class="btn ${customSpellSounds[spellId] === f.path ? 'btn-green' : 'btn-gray'}"
                onclick="selectSpellSound('${spellId}', '${f.path.replace(/'/g, "\\'")}')">
                ${customSpellSounds[spellId] === f.path ? '✔ ' : ''}${f.path}
            </button>
        `).join('');
    }

    document.getElementById('spellSoundModal').classList.add('open');
}

function selectSpellSound(spellId, filePath){
    customSpellSounds[spellId] = filePath;
    localStorage.setItem('customSpellSounds', JSON.stringify(customSpellSounds));
    closeSpellSoundModal();
}

function clearSpellSound(){
    if(currentSpellSoundId) delete customSpellSounds[currentSpellSoundId];
    localStorage.setItem('customSpellSounds', JSON.stringify(customSpellSounds));
    closeSpellSoundModal();
}

function closeSpellSoundModal(){
    document.getElementById('spellSoundModal').classList.remove('open');
    currentSpellSoundId = null;
}

async function playSchoolSound(school, spellId){
    if(!soundsEnabled) return;

    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    const soundSet = character && character.soundSet ? character.soundSet : null;

    try {
        // Vlastní zvuk kouzla přes File System API
        if(spellId && customSpellSounds[spellId] && soundsDirectoryHandle){
            const parts = customSpellSounds[spellId].split('/');
            let dirH = soundsDirectoryHandle;
            for(let i = 0; i < parts.length - 1; i++){
                dirH = await dirH.getDirectoryHandle(parts[i]);
            }
            const fileHandle = await dirH.getFileHandle(parts[parts.length - 1]);
            const file = await fileHandle.getFile();
            const url = URL.createObjectURL(file);
            const audio = new Audio(url);
            audio.play().catch(e => console.warn('Chyba přehrávání:', e));
            audio.onended = () => URL.revokeObjectURL(url);
            return;
        }

        if(!soundSet) return;

        // Pokud je vybraná složka, použij File System API
        if(soundsDirectoryHandle){
            const setDir = await soundsDirectoryHandle.getDirectoryHandle(soundSet);
            const fileHandle = await setDir.getFileHandle(school.toLowerCase() + '.mp3');
            const file = await fileHandle.getFile();
            const url = URL.createObjectURL(file);
            const audio = new Audio(url);
            audio.play().catch(e => console.warn('Chyba přehrávání:', e));
            audio.onended = () => URL.revokeObjectURL(url);
            return;
        }

        // Fallback – relativní cesta k HTML souboru
        const audio = new Audio('sounds/' + soundSet + '/' + school.toLowerCase() + '.mp3');
        audio.play().catch(e => console.warn('Zvuk se nepodařilo přehrát:', e));

    } catch(e) {
        // Fallback při chybě File System API
        if(soundSet){
            const audio = new Audio('sounds/' + soundSet + '/' + school.toLowerCase() + '.mp3');
            audio.play().catch(e2 => console.warn('Zvuk se nepodařilo přehrát:', e2));
        }
    }
}

function toggleSounds(){
    soundsEnabled = !soundsEnabled;
    const btn = document.getElementById('soundToggleBtn');
    btn.textContent = soundsEnabled ? 'Sounds On' : 'Sounds Off';
    btn.className = soundsEnabled ? 'btn btn-green' : 'btn btn-gray';
}

function longRest(){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;
    character.spellSlots = initSpellSlots(character);
    saveCharacters(characters);
    renderSpellSlotTable(character);
    renderSpellCards(currentSpellTab);
}

function shortRest(){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    if(character.class === 'Warlock'){
        const slotCounts = getSpellSlots('Warlock', parseInt(character.level));
        const warlockLevel = slotCounts[0] || 0;
        const warlockCount = slotCounts[1] || 0;
        if(warlockLevel > 0){
            character.spellSlots[warlockLevel] = Array(warlockCount).fill(true);
            saveCharacters(characters);
            renderSpellSlotTable(character);
            renderSpellCards(currentSpellTab);
            return;
        }
    }

    alert('Short Rest: only Warlock recovers spell slots on a Short Rest.');
}

function toggleSlot(level, index){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character || !character.spellSlots) return;
    character.spellSlots[level][index] = !character.spellSlots[level][index];
    saveCharacters(characters);
    renderSpellSlotTable(character);
    renderSpellCards(currentSpellTab);
}


function showSpellTab(tab){
    currentSpellTab = tab;
    document.getElementById('preparedTabBtn').className = 'btn btn-gray';
    document.getElementById('knownTabBtn').className = 'btn btn-gray';
    document.getElementById('allTabBtn').className = 'btn btn-gray';

    if(tab === 'prepared'){
        document.getElementById('preparedTabBtn').className = 'btn btn-green';
    } else if(tab === 'known'){
        document.getElementById('knownTabBtn').className = 'btn btn-green';
    } else if(tab === 'all'){
        document.getElementById('allTabBtn').className = 'btn btn-green';
    }

    renderSpellCards(tab);
}


// STORAGE

    function getCharacters(){
        return JSON.parse(localStorage.getItem("characters")) || [];
    }

    function saveCharacters(characters){
        localStorage.setItem("characters", JSON.stringify(characters));
    }

    // CREATE CHARACTER

    function createCharacter(){

        const name = document.getElementById("characterName").value.trim();
        const characterClass = document.getElementById("characterClass").value;
        const level = document.getElementById("characterLevel").value;
        const race = document.getElementById("characterRace").value;
        const alignment = document.getElementById("characterAlignment").value;
        const soundSet = document.getElementById("characterSoundSet").value;

        const errorMessage = document.getElementById("errorMessage");

        if(
            !name ||
            !characterClass ||
            !level ||
            !race ||
            !alignment
        ){
            errorMessage.textContent = "Please fill all fields.";
            return;
        }

        errorMessage.textContent = "";

        const wasEditing = editingCharacterId !== null;

        const characters = getCharacters();

        if(editingCharacterId){

            const index = characters.findIndex(c => c.id === editingCharacterId);

            characters[index] = {
                id: editingCharacterId,
                name,
                class: characterClass,
                level,
                race,
                alignment,
                soundSet,
                spellSlots: characters[index].spellSlots
            };

        }else{

            characters.push({
                id: Date.now(),
                name,
                class: characterClass,
                level,
                race,
                alignment,
                soundSet
            });

        }

        saveCharacters(characters);

        renderCharacters();

        if(wasEditing){

            const characterId = currentCharacterId;

            clearForm();

            document.getElementById("createCharacterPage").classList.add("hidden");

            openCharacter(characterId);

        }else{

            clearForm();
            returnToMainPage();

        }
    }

    // RENDER

    function renderCharacters(){

        const characterList = document.getElementById("characterList");

        const characters = getCharacters();

        if(characters.length === 0){
            characterList.innerHTML =
                '<div class="empty-message">No characters created yet.</div>';
            return;
        }

        characterList.innerHTML = "";

        characters.forEach(character => {

            const card = document.createElement("div");
            card.className = "character-card";

            card.innerHTML = `
                <div>
                    <div class="character-card-name">${character.name}</div>
                    <div class="character-card-meta">Lvl ${character.level} ${character.class} · ${character.race}</div>
                </div>
                <span class="character-card-arrow">›</span>
            `;
            card.onclick = () => openCharacter(character.id);

            characterList.appendChild(card);

        });
    }

    // FORM

    function clearForm(){

        document.getElementById("characterName").value = "";
        document.getElementById("characterClass").value = "";
        document.getElementById("characterLevel").value = "";
        document.getElementById("characterRace").value = "";
        document.getElementById("characterAlignment").value = "";
        document.getElementById("errorMessage").textContent = "";

        editingCharacterId = null;

        document.querySelector('#createCharacterPage h2').textContent = "Create Character";
        document.querySelector('#createCharacterPage .btn-green').textContent = "Create Character";

    }

    // START

    renderCharacters();

