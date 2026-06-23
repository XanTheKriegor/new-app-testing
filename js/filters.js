function getCastingTimeCategory(castingTime){
    if(!castingTime) return 'Longer';
    const t = castingTime.toLowerCase();
    if(t.startsWith('1 bonus')) return 'Bonus Action';
    if(t.startsWith('1 reaction')) return 'Reaction';
    if(t.startsWith('1 action')) return 'Action';
    return 'Longer';
}

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
    const castingTimesDiv = document.getElementById('filterCastingTimes');
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

    if(castingTimesDiv){
        castingTimesDiv.innerHTML = ALL_CASTING_TIMES.map(c => `
            <span class="filter-chip ${activeFilters.castingTimes.includes(c) ? 'active' : ''}" onclick="toggleFilter('castingTimes','${c}')">
                ${c}
            </span>
        `).join('');
    }

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
        activeFilters.castingTimes.length || activeFilters.ritual || activeFilters.concentration;
    document.getElementById('filterClearBtn').style.display = hasAny ? 'block' : 'none';
}

function clearFilters(){
    activeFilters = { levels: [], schools: [], classes: [], sources: [], castingTimes: [], ritual: false, concentration: false };
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
    if(activeFilters.castingTimes.length && !activeFilters.castingTimes.includes(getCastingTimeCategory(spell.castingTime))) return false;
    if(activeFilters.ritual && !spell.ritual) return false;
    if(activeFilters.concentration && !spell.concentration) return false;
    return true;
}

function onSpellSearch(){
    spellSearchQuery = document.getElementById('spellSearchInput').value.trim().toLowerCase();
    renderSpellCards(currentSpellTab);
}

