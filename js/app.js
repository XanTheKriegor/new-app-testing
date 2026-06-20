let currentSpellTab = 'prepared';
let spellSearchQuery = '';
let detailsDefaultShown = localStorage.getItem('detailsDefaultShown') === 'true';

function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('appTheme', theme);
    updateThemeButtons();
}

function updateThemeButtons(){
    const theme = localStorage.getItem('appTheme') || 'dark';
    const lightBtn = document.getElementById('themeLightBtn');
    const darkBtn = document.getElementById('themeDarkBtn');
    if(lightBtn) lightBtn.className = theme === 'light' ? 'btn btn-gold btn-small' : 'btn btn-gray btn-small';
    if(darkBtn) darkBtn.className = theme === 'dark' ? 'btn btn-gold btn-small' : 'btn btn-gray btn-small';
}

(function initTheme(){
    const theme = localStorage.getItem('appTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
})();

function toggleDetailsDefault(){
    detailsDefaultShown = !detailsDefaultShown;
    localStorage.setItem('detailsDefaultShown', detailsDefaultShown);
    updateDetailsDefaultBtn();
    renderSpellCards(currentSpellTab);
}

function updateDetailsDefaultBtn(){
    const btn = document.getElementById('detailsDefaultBtn');
    if(!btn) return;
    btn.textContent = detailsDefaultShown ? '📖 Details On' : '📖 Details Off';
    btn.className = detailsDefaultShown ? 'btn btn-green' : 'btn btn-gray';
}
let activeFilters = { levels: [], schools: [], classes: [], sources: [], ritual: false, concentration: false };
let filterPanelOpen = false;

const ALL_SCHOOLS = ['Abjuration','Conjuration','Divination','Enchantment','Evocation','Illusion','Necromancy','Transmutation'];
const ALL_CLASSES = ['Artificer','Bard','Cleric','Druid','Paladin','Ranger','Sorcerer','Warlock','Wizard'];
const ALL_LEVELS = [0,1,2,3,4,5,6,7,8,9];
const ALL_SOURCES = ['AAG','AI','BMT','EFA','EGW','FRHoF','FTD','GGR','IDRotF','PHB','SCC','SatO','TCE','XGE'];

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
    const sourcesDiv = document.getElementById('filterSources');
    const specialDiv = document.getElementById('filterSpecial');

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

    sourcesDiv.innerHTML = ALL_SOURCES.map(s => `
        <span class="filter-chip ${activeFilters.sources.includes(s) ? 'active' : ''}" onclick="toggleFilter('sources','${s}')">
            ${s}
        </span>
    `).join('');

    specialDiv.innerHTML = `
        <span class="filter-chip ${activeFilters.ritual ? 'active' : ''}" onclick="toggleSpecialFilter('ritual')">
            📜 Ritual
        </span>
        <span class="filter-chip ${activeFilters.concentration ? 'active' : ''}" onclick="toggleSpecialFilter('concentration')">
            🔵 Concentration
        </span>
    `;
}

function toggleSpecialFilter(type){
    activeFilters[type] = !activeFilters[type];
    updateFilterClearBtn();
    renderFilterChips();
    renderSpellCards(currentSpellTab);
}

function toggleFilter(type, value){
    const arr = activeFilters[type];
    const idx = arr.indexOf(value);
    if(idx === -1) arr.push(value);
    else arr.splice(idx, 1);
    updateFilterClearBtn();
    renderFilterChips();
    renderSpellCards(currentSpellTab);
}

function updateFilterClearBtn(){
    const hasAny = activeFilters.levels.length || activeFilters.schools.length ||
        activeFilters.classes.length || activeFilters.sources.length ||
        activeFilters.ritual || activeFilters.concentration;
    document.getElementById('filterClearBtn').style.display = hasAny ? 'block' : 'none';
}

function clearFilters(){
    activeFilters = { levels: [], schools: [], classes: [], sources: [], ritual: false, concentration: false };
    document.getElementById('filterClearBtn').style.display = 'none';
    renderFilterChips();
    renderSpellCards(currentSpellTab);
}

function spellMatchesFilters(spell){
    const lvl = getSpellLevelNum(spell.level);
    if(activeFilters.levels.length && !activeFilters.levels.includes(lvl)) return false;
    if(activeFilters.schools.length && !activeFilters.schools.includes(spell.school)) return false;
    if(activeFilters.classes.length && !spell.classes.some(c => activeFilters.classes.includes(c))) return false;
    if(activeFilters.sources.length && !activeFilters.sources.includes(spell.source)) return false;
    if(activeFilters.ritual && !spell.ritual) return false;
    if(activeFilters.concentration && !spell.concentration) return false;
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
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    const spell = SPELL_DATABASE.find(s => s.id === spellId);

    if(character && spell && !spell.classes.includes(character.class)){
        alert(`${spell.name} is not on the spell list for ${character.class}!`);
        return;
    }

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

function getActiveConcentration(){
    const data = JSON.parse(localStorage.getItem('activeConcentration') || '{}');
    return data[currentCharacterId] || null;
}

function setActiveConcentration(spellName){
    const data = JSON.parse(localStorage.getItem('activeConcentration') || '{}');
    if(spellName) data[currentCharacterId] = spellName;
    else delete data[currentCharacterId];
    localStorage.setItem('activeConcentration', JSON.stringify(data));
}

function breakConcentration(){
    setActiveConcentration(null);
    renderConcentrationBanner();
}

function renderConcentrationBanner(){
    const banner = document.getElementById('concentrationBanner');
    if(!banner) return;
    const active = getActiveConcentration();
    banner.classList.remove('hidden');
    if(!active){
        banner.className = 'concentration-banner concentration-banner-empty';
        banner.innerHTML = `<span>⚪ No active concentration</span>`;
        return;
    }
    banner.className = 'concentration-banner';
    banner.innerHTML = `
        <span>🔵 Concentrating: <strong>${active}</strong></span>
        <button class="btn btn-small btn-red" onclick="breakConcentration()" style="margin-top:0;">✕ Break</button>
    `;
}

function applyConcentration(spell){
    if(!spell.concentration) return;
    const active = getActiveConcentration();
    if(active && active !== spell.name){
        if(!confirm(`You are already concentrating on "${active}". Casting "${spell.name}" will end that concentration. Continue?`)){
            return false;
        }
    }
    setActiveConcentration(spell.name);
    renderConcentrationBanner();
    return true;
}

function castSpell(spellId){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    const spell = SPELL_DATABASE.find(s => s.id === spellId);
    if(!spell) return;

    const minLvl = getSpellLevelNum(spell.level);

    // Cantrip – no slot needed
    if(minLvl === 0){
        if(spell.concentration && applyConcentration(spell) === false) return;
        playSchoolSound(spell.school, spell.id);
        return;
    }

    const slots = character.spellSlots || {};

    // Find available slots from minLvl upward
    const availableLevels = [];
    for(let i = minLvl; i <= 9; i++){
        const count = (slots[i] || []).filter(s => s === true).length;
        if(count > 0) availableLevels.push({ level: i, count });
    }

    // No available slot
    if(availableLevels.length === 0){
        alert('You have no free spell slot of level ' + minLvl + ' or higher!');
        return;
    }

    // Show selection modal (always, even if only one level)
    document.getElementById('castModalTitle').textContent = spell.name;
    document.getElementById('castModalSubtitle').textContent = 'Choose a spell slot (min. level ' + minLvl + '):';

    const slotsDiv = document.getElementById('castModalSlots');
    slotsDiv.innerHTML = availableLevels.map(({level, count}) => `
        <button class="btn btn-green" onclick="confirmCast('${spellId}', ${level}); closeCastModal();">
            Slot level ${level} <span style="opacity:0.7;font-size:13px;">(${count} remaining)</span>
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

    if(spell.concentration && applyConcentration(spell) === false) return;

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
    const pinnedList = getPinnedSpells();

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
        const pinned = getPinnedSpells();
        spells = SPELL_DATABASE
            .filter(s => prepared.includes(s.id) && matchesAll(s))
            .sort((a,b) => {
                const aPinned = pinned.includes(a.id);
                const bPinned = pinned.includes(b.id);
                if(aPinned !== bPinned) return aPinned ? -1 : 1;
                return getSpellLevelNum(a.level) - getSpellLevelNum(b.level) || a.name.localeCompare(b.name);
            });
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
            actions = `<button class="btn btn-small btn-green" onclick="addToBook('${spell.id}')">Add to Book</button>`;
        } else if(mode === 'known'){
            actions = `
                ${!isPrepared ? `<button class="btn btn-small btn-green" onclick="prepareSpell('${spell.id}')">Prepare</button>` : '<span style="color:#9fd19f;font-size:13px;">✔ Prepared</span>'}
                <button class="btn btn-small btn-red" onclick="removeFromBook('${spell.id}')">Remove</button>
            `;
        } else if(mode === 'prepared'){
            const lvl = getSpellLevelNum(spell.level);
            const slots = character.spellSlots || {};
            const canCast = lvl === 0 || Object.keys(slots).some(k => parseInt(k) >= lvl && slots[k].some(s => s === true));
            const hasCustomSound = customSpellSounds[spell.id] ? '🎵' : '🎵';
            const customSoundStyle = customSpellSounds[spell.id] ? 'background:#3d6b3d;' : '';
            const isPinned = pinnedList.includes(spell.id);
            actions = `
                <button class="btn btn-small ${canCast ? 'btn-green' : 'btn-gray'}" ${!canCast && lvl > 0 ? 'style="opacity:0.5;"' : ''} onclick="castSpell('${spell.id}')">Cast</button>
                <button class="btn btn-small btn-gray" ${isPinned ? 'style="background:#5a4318;"' : ''} onclick="togglePinSpell('${spell.id}')" title="Pin to top">${isPinned ? '⭐' : '☆'}</button>
                <button class="btn btn-small btn-gray" ${customSoundStyle ? `style="${customSoundStyle}"` : ''} onclick="openSpellSoundModal('${spell.id}', '${spell.name.replace(/'/g, "\\'")}')">🎵</button>
                <button class="btn btn-small btn-gray" onclick="unprepareSpell('${spell.id}')">Unprepare</button>
            `;
        }

        const components = spell.components || [];
        const compStr = components.length ? components.join(', ') + (spell.material ? ` (${spell.material})` : '') : '';
        const rawDesc = spell.description || '';
        const cleanTags = s => s
            .replace(/\{@(?:scaledice|scaledamage)\s+[^|]+\|[^|]+\|([^|}]+)[^}]*\}/g, '$1')
            .replace(/\{@(?:damage|dice)\s+([^|}]+)[^}]*\}/g, '$1')
            .replace(/\{@filter\s+([^|{}]+)(?:\|[^}]*)?\}/g, '$1')
            .replace(/\{@chance\s+(\d+)\|[^}]*\}/g, '$1%')
            .replace(/\{@\w+\s+[^|{}]+\|[^|{}]+\|([^|{}]+)(?:\|[^}]*)?\}/g, '$1')
            .replace(/\{@\w+\s+([^|{}]+?)(?:\|[^}]*)?\}/g, '$1')
            .replace(/\{@[^}]*\}/g, '')
            .replace(/(At Higher Levels:\s*)+/g, '\n\nAt Higher Levels:\n')
            .replace(/Using a Higher-Level Spell Slot:\s*/g, '\n\nAt Higher Levels:\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        let descClean = '';
        if(rawDesc){
            const has2014 = rawDesc.includes('[2014]');
            const has2024 = rawDesc.includes('[2024]');
            if(has2014 || has2024){
                const part2014 = rawDesc.match(/\[2014\]([\s\S]*?)(?=\[2024\]|$)/);
                const part2024 = rawDesc.match(/\[2024\]([\s\S]*?)$/);
                let parts = [];
                if(part2014 && part2014[1].trim()) parts.push('<span class="edition-tag">2014</span>\n' + cleanTags(part2014[1]));
                if(part2024 && part2024[1].trim()) parts.push('<span class="edition-tag">2024</span>\n' + cleanTags(part2024[1]));
                descClean = parts.join('\n\n');
            } else {
                descClean = cleanTags(rawDesc);
            }
        }

        return `
            <div class="spell-card" data-school="${spell.school}" ${mode === 'prepared' && pinnedList.includes(spell.id) ? 'style="border-color:var(--gold);box-shadow:0 0 0 1px var(--gold) inset;"' : ''}>
                <div class="spell-card-top">
                    <div class="spell-name-toggle" onclick="toggleSpellDetails(this)">
                        <div class="spell-name">
                            ${spell.name}
                            <span class="spell-badges">
                                ${spell.concentration ? '<span class="badge">C</span>' : ''}
                                ${spell.ritual ? '<span class="badge">R</span>' : ''}
                            </span>
                        </div>
                        <div class="spell-level-school">${spell.level} · ${spell.school}</div>
                    </div>
                </div>
                <div class="spell-details ${detailsDefaultShown ? '' : 'hidden'}">
                    Range: ${spell.range}<br>
                    Duration: ${spell.duration}<br>
                    Casting time: ${spell.castingTime}<br>
                    ${compStr ? `Components: ${compStr}<br>` : ''}
                    <span style="color:var(--gold-dim);">Source: ${spell.source}</span><br>
                    <span style="color:var(--text-dim);font-size:12px;">${spell.classes.join(', ')}</span>
                </div>
                ${descClean ? `
                <div class="spell-desc-toggle" onclick="toggleSpellDesc(this)">▶ Description</div>
                <div class="spell-desc hidden">${descClean.replace(/\n/g, '<br>')}</div>
                ` : ''}
                <div class="spell-action-bottom">
                    ${actions}
                </div>
            </div>
        `;
    }).join('');
}


function toggleSpellDesc(el){
    const desc = el.nextElementSibling;
    const open = !desc.classList.contains('hidden');
    desc.classList.toggle('hidden', open);
    el.textContent = (open ? '▶' : '▼') + ' Description';
}

function toggleSpellDetails(el){
    const card = el.closest('.spell-card');
    const details = card.querySelector('.spell-details');
    if(!details) return;
    details.classList.toggle('hidden');
}


let currentCharacterId = null;
let editingCharacterId = null;

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

    window.showMainPage = returnToMainPage;

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

    // Find max slot count at any level for cell height
    let maxSlots = 0;
    for(let i=1;i<=9;i++){
        const count = (character.spellSlots[i] || []).length;
        if(count > maxSlots) maxSlots = count;
    }

    let table = '<table><tr>';
    for(let i=1;i<=9;i++) table += '<th>Lvl '+i+'</th>';
    table += '</tr><tr>';

    for(let i=1;i<=9;i++){
        table += '<td style="vertical-align:top;text-align:left;">';
        const levelSlots = character.spellSlots[i] || [];
        if(levelSlots.length === 0){
            table += '<span style="color:var(--text-dim);font-size:13px;">—</span>';
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

    // Initialize slots if they don't exist yet
    if(!character.spellSlots){
        character.spellSlots = initSpellSlots(character);
        saveCharacters(characters);
    }

    // Set default filter based on character's class
    activeFilters = { levels: [], schools: [], classes: [character.class], sources: [], ritual: false, concentration: false };
    document.getElementById('filterClearBtn').style.display = 'block';

    document.getElementById("characterPage").classList.add("hidden");
    document.getElementById("spellbookPage").classList.remove("hidden");
    document.getElementById("spellbookTitle").textContent = character.name + " - Spellbook";

    renderSpellSlotTable(character);
    renderConcentrationBanner();
    updateDetailsDefaultBtn();
    showSpellTab('prepared');
}

function backToCharacterFromSpellbook(){
    document.getElementById("spellbookPage").classList.add("hidden");
    document.getElementById("characterPage").classList.remove("hidden");
}



let soundsEnabled = false;
let soundsDirectoryHandle = null;
let spellSoundFiles = [];
let customSpellSounds = JSON.parse(localStorage.getItem('customSpellSounds') || '{}');

function getPinnedSpells(){
    const data = JSON.parse(localStorage.getItem('pinnedSpells') || '{}');
    return data[currentCharacterId] || [];
}

function savePinnedSpells(list){
    const data = JSON.parse(localStorage.getItem('pinnedSpells') || '{}');
    data[currentCharacterId] = list;
    localStorage.setItem('pinnedSpells', JSON.stringify(data));
}

function togglePinSpell(spellId){
    const pinned = getPinnedSpells();
    const idx = pinned.indexOf(spellId);
    if(idx === -1) pinned.push(spellId);
    else pinned.splice(idx, 1);
    savePinnedSpells(pinned);
    renderSpellCards('prepared');
}
let currentSpellSoundId = null;

async function pickSoundsFolder(){
    try {
        soundsDirectoryHandle = await window.showDirectoryPicker({ mode: 'read' });
        document.getElementById('soundsFolderBtn').textContent = '📁 ' + soundsDirectoryHandle.name;
        document.getElementById('soundsFolderBtn').className = 'btn btn-green';

        // Load list of mp3 files recursively
        spellSoundFiles = await listMp3Files(soundsDirectoryHandle);
        console.log('Files found:', spellSoundFiles.length);
    } catch(e) {
        if(e.name !== 'AbortError') console.warn('Could not open folder:', e);
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
        alert('Please pick the sounds folder first using the 📁 Sounds button');
        return;
    }

    currentSpellSoundId = spellId;
    document.getElementById('spellSoundModalTitle').textContent = '🎵 ' + spellName;

    const currentSound = customSpellSounds[spellId];
    const clearBtn = document.getElementById('spellSoundClearBtn');
    clearBtn.style.display = currentSound ? 'block' : 'none';
    if(currentSound) clearBtn.textContent = '🗑 Remove custom sound (' + currentSound + ')';

    const list = document.getElementById('spellSoundFileList');
    if(spellSoundFiles.length === 0){
        list.innerHTML = '<p style="color:#aaa;text-align:center;">No mp3 files found.</p>';
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
    renderSpellCards(currentSpellTab);
}

function clearSpellSound(){
    if(currentSpellSoundId) delete customSpellSounds[currentSpellSoundId];
    localStorage.setItem('customSpellSounds', JSON.stringify(customSpellSounds));
    closeSpellSoundModal();
    renderSpellCards(currentSpellTab);
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
        // Custom spell sound via File System API
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
            audio.play().catch(e => console.warn('Playback error:', e));
            audio.onended = () => URL.revokeObjectURL(url);
            return;
        }

        if(!soundSet) return;

        // If a folder is selected, use the File System API
        if(soundsDirectoryHandle){
            const setDir = await soundsDirectoryHandle.getDirectoryHandle(soundSet);
            const fileHandle = await setDir.getFileHandle(school.toLowerCase() + '.mp3');
            const file = await fileHandle.getFile();
            const url = URL.createObjectURL(file);
            const audio = new Audio(url);
            audio.play().catch(e => console.warn('Playback error:', e));
            audio.onended = () => URL.revokeObjectURL(url);
            return;
        }

        // Fallback – relative path to the HTML file
        const audio = new Audio('sounds/' + soundSet + '/' + school.toLowerCase() + '.mp3');
        audio.play().catch(e => console.warn('Could not play sound:', e));

    } catch(e) {
        // Fallback on File System API error
        if(soundSet){
            const audio = new Audio('sounds/' + soundSet + '/' + school.toLowerCase() + '.mp3');
            audio.play().catch(e2 => console.warn('Could not play sound:', e2));
        }
    }
}

function toggleSounds(){
    soundsEnabled = !soundsEnabled;
    const btn = document.getElementById('soundToggleBtn');
    btn.textContent = soundsEnabled ? '🔊 Sounds On' : '🔇 Sounds Off';
    btn.className = soundsEnabled ? 'btn btn-green' : 'btn btn-gray';
}

function longRest(){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;
    character.spellSlots = initSpellSlots(character);
    saveCharacters(characters);
    setActiveConcentration(null);
    renderConcentrationBanner();
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

    window.openHelpModal = function(){
        document.getElementById('helpModal').classList.add('open');
    };

    window.closeHelpModal = function(){
        document.getElementById('helpModal').classList.remove('open');
    };

    window.toggleHelpSection = function(el){
        const body = el.nextElementSibling;
        const open = !body.classList.contains('hidden');
        body.classList.toggle('hidden', open);
        el.textContent = (open ? '▶' : '▼') + el.textContent.substring(1);
    };

    window.exportData = function(){
        const data = {
            version: 1,
            exportedAt: new Date().toISOString(),
            characters: JSON.parse(localStorage.getItem('characters') || '[]'),
            knownSpells: JSON.parse(localStorage.getItem('knownSpells') || '{}'),
            preparedSpells: JSON.parse(localStorage.getItem('preparedSpells') || '{}'),
            customSpellSounds: JSON.parse(localStorage.getItem('customSpellSounds') || '{}')
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'spell-tracker-backup-' + new Date().toISOString().slice(0,10) + '.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    window.importData = function(event){
        const file = event.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = function(e){
            try {
                const data = JSON.parse(e.target.result);
                if(!data.characters) throw new Error('Invalid file');

                if(!confirm('Importing will overwrite all existing data. Continue?')) {
                    event.target.value = '';
                    return;
                }

                localStorage.setItem('characters', JSON.stringify(data.characters || []));
                localStorage.setItem('knownSpells', JSON.stringify(data.knownSpells || {}));
                localStorage.setItem('preparedSpells', JSON.stringify(data.preparedSpells || {}));
                localStorage.setItem('customSpellSounds', JSON.stringify(data.customSpellSounds || {}));

                renderCharacters();
                alert('Import successful! Loaded ' + data.characters.length + ' characters.');
            } catch(err) {
                alert('Import error: ' + err.message);
            }
            event.target.value = '';
        };
        reader.readAsText(file);
    };

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

            const oldChar = characters[index];
            const levelChanged = oldChar.level !== level;
            const classChanged = oldChar.class !== characterClass;

            const updatedChar = {
                id: editingCharacterId,
                name,
                class: characterClass,
                level,
                race,
                alignment,
                soundSet,
                spellSlots: oldChar.spellSlots
            };

            // Recalculate slots if level or class changed
            if(levelChanged || classChanged){
                const newSlots = initSpellSlots(updatedChar);

                if(!classChanged && levelChanged){
                    // Keep old slot states, just add new ones
                    const oldSlots = oldChar.spellSlots || {};
                    for(let i = 1; i <= 9; i++){
                        const oldLevel = oldSlots[i] || [];
                        const newLevel = newSlots[i] || [];
                        if(oldLevel.length > 0 && newLevel.length >= oldLevel.length){
                            // Keep old slot states, set new ones to true
                            for(let j = 0; j < oldLevel.length; j++){
                                newLevel[j] = oldLevel[j];
                            }
                        }
                        newSlots[i] = newLevel;
                    }
                }

                updatedChar.spellSlots = newSlots;
            }

            characters[index] = updatedChar;

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
    updateThemeButtons();

