function getLeveledPreparedSpells(list=getPreparedSpells()){
    return list.filter(spellId => {
        const spell = SPELL_DATABASE.find(s => s.id === spellId);
        return spell && getSpellLevelNum(spell.level) > 0;
    });
}

function getPreparationLimit(character){
    if(!character || !PREPARED_CASTER_CLASSES.includes(character.class)) return null;

    const slotCounts = getSpellSlots(character.class, parseInt(character.level));
    const hasSpellSlots = slotCounts.some(count => count > 0);

    if(!hasSpellSlots) return {
        limit: 0,
        modifier: parseInt(character.spellcastingAbilityMod || 0),
        label: `${character.class}s cannot prepare leveled spells until they have spell slots.`
    };

    const modifier = parseInt(character.spellcastingAbilityMod || 0);
    const level = parseInt(character.level) || 0;
    const base = character.class === 'Paladin' ? Math.floor(level / 2) : level;
    const limit = Math.max(1, base + modifier);
    const formula = character.class === 'Paladin'
        ? `half level (${base}) + spellcasting modifier (${modifier >= 0 ? '+' : ''}${modifier})`
        : `level (${level}) + spellcasting modifier (${modifier >= 0 ? '+' : ''}${modifier})`;

    return { limit, modifier, label: formula };
}

function renderPreparationLimitBanner(){
    const banner = document.getElementById('preparationLimitBanner');
    if(!banner) return;

    const character = getCharacters().find(c => c.id === currentCharacterId);
    const limitInfo = getPreparationLimit(character);
    const knownCount = getKnownSpells().length;

    const hasAttackBonus = character && character.spellAttackBonus !== undefined && character.spellAttackBonus !== null && character.spellAttackBonus !== '';
    const hasSaveDC = character && character.spellSaveDC !== undefined && character.spellSaveDC !== null && character.spellSaveDC !== '';

    const statsHtml = (hasAttackBonus || hasSaveDC) ? `
        <span class="spell-stats-col">
            ${hasAttackBonus ? `<span class="spell-attack-bonus">Spell Attack Bonus: ${character.spellAttackBonus >= 0 ? '+' : ''}${character.spellAttackBonus}</span>` : ''}
            ${hasSaveDC ? `<span class="spell-save-dc">Spell save DC: ${character.spellSaveDC}</span>` : ''}
        </span>
    ` : '';

    if(!limitInfo){
        banner.className = 'preparation-limit-banner';
        banner.innerHTML = `
            <span><strong>Known spells:</strong> ${knownCount}</span>
            ${statsHtml}
        `;
        return;
    }

    const preparedCount = getLeveledPreparedSpells().length;
    const overLimit = preparedCount > limitInfo.limit;
    banner.className = 'preparation-limit-banner' + (overLimit ? ' warning' : '');
    banner.innerHTML = `
        <span>
            <strong>Prepared spells:</strong> ${preparedCount} / ${limitInfo.limit}
            ${overLimit ? `<span class="preparation-limit-note">Over limit. Unprepare ${preparedCount - limitInfo.limit} leveled spell${preparedCount - limitInfo.limit === 1 ? '' : 's'}.</span>` : ''}
            <span class="known-spells-line"><strong>Known spells:</strong> ${knownCount}</span>
        </span>
        ${statsHtml}
    `;
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
    renderPreparationLimitBanner();
    renderSpellCards('known');
}

function prepareSpell(spellId){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    const spell = SPELL_DATABASE.find(s => s.id === spellId);
    const prepared = getPreparedSpells();

    if(prepared.includes(spellId)) return;

    const limitInfo = getPreparationLimit(character);
    const countsAgainstLimit = spell && getSpellLevelNum(spell.level) > 0;
    if(limitInfo && countsAgainstLimit && getLeveledPreparedSpells(prepared).length >= limitInfo.limit){
        alert(`You can prepare ${limitInfo.limit} leveled spell${limitInfo.limit === 1 ? '' : 's'} with this character. Unprepare another spell first.`);
        return;
    }

    prepared.push(spellId);
    savePreparedSpells(prepared);
    renderPreparationLimitBanner();
    renderSpellCards('known');
}

function unprepareSpell(spellId){
    const prepared = getPreparedSpells().filter(id => id !== spellId);
    savePreparedSpells(prepared);
    renderPreparationLimitBanner();
    renderSpellCards('prepared');
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
    const limitInfo = getPreparationLimit(character);
    const preparedLeveledCount = getLeveledPreparedSpells(prepared).length;
    const preparationFull = limitInfo && preparedLeveledCount >= limitInfo.limit;

    renderPreparationLimitBanner();

    let spells = [];

    const matchesSearch = s => !spellSearchQuery || s.name.toLowerCase().includes(spellSearchQuery);
    const matchesAll = s => matchesSearch(s) && spellMatchesFilters(s);

    if(mode === 'all'){
        spells = SPELL_DATABASE
            .filter(s => matchesAll(s))
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
            all: spellSearchQuery ? 'No spells match your search.' : 'No spells match the current filters.',
            known: spellSearchQuery ? 'No spells match your search.' : 'No spells in your spellbook yet. Add some from All Spells!',
            prepared: spellSearchQuery ? 'No spells match your search.' : 'No spells prepared. Prepare some from Known Spells!'
        };
        document.getElementById('spellTabContent').innerHTML = '<p style="text-align:center;color:#aaa;padding:20px;">' + msgs[mode] + '</p>';
        return;
    }

    document.getElementById('spellTabContent').innerHTML = spells.map(spell => {
        const isPrepared = prepared.includes(spell.id);
        const isKnown = known.includes(spell.id);
        let actions = '';

        if(mode === 'all'){
            actions = isKnown
                ? '<span style="color:#9fd19f;font-size:13px;">✔ Already in your spellbook</span>'
                : `<button class="btn btn-small btn-green" onclick="addToBook('${spell.id}')">Add to Book</button>`;
        } else if(mode === 'known'){
            const countsAgainstLimit = getSpellLevelNum(spell.level) > 0;
            const canPrepare = !limitInfo || !countsAgainstLimit || !preparationFull;
            actions = `
                ${!isPrepared ? `<button class="btn btn-small ${canPrepare ? 'btn-green' : 'btn-gray'}" ${canPrepare ? '' : 'style="opacity:0.5;" title="Preparation limit reached"'} onclick="prepareSpell('${spell.id}')">Prepare</button>` : '<span style="color:#9fd19f;font-size:13px;">✔ Prepared</span>'}
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
        let part2014Text = '', part2024Text = '';
        if(rawDesc){
            const has2014 = rawDesc.includes('[2014]');
            const has2024 = rawDesc.includes('[2024]');
            if(has2014 || has2024){
                const part2014 = rawDesc.match(/\[2014\]([\s\S]*?)(?=\[2024\]|$)/);
                const part2024 = rawDesc.match(/\[2024\]([\s\S]*?)$/);
                part2014Text = part2014 && part2014[1].trim() ? cleanTags(part2014[1]) : '';
                part2024Text = part2024 && part2024[1].trim() ? cleanTags(part2024[1]) : '';
            } else {
                part2014Text = part2024Text = cleanTags(rawDesc);
            }
        }

        const showEditionToggle = part2014Text && part2024Text && part2014Text !== part2024Text;
        const selectedEdition = getSpellEdition(spell.id);
        descClean = selectedEdition === '2014' ? part2014Text : part2024Text;

        const detailsOpen = manuallySetDetailIds.has(spell.id) ? manuallySetDetailIds.get(spell.id) : detailsDefaultShown;
        const descOpen = openDescriptionIds.has(spell.id);

        return `
            <div class="spell-card" data-school="${spell.school}" ${mode === 'prepared' && pinnedList.includes(spell.id) ? 'style="border-color:var(--gold);box-shadow:0 0 0 1px var(--gold) inset;"' : ''}>
                <div class="spell-card-top">
                    <div class="spell-name-toggle" onclick="toggleSpellDetails(this, '${spell.id}')">
                        <div class="spell-name">
                            ${spell.name}
                            <span class="spell-badges">
                                ${spell.concentration ? '<span class="badge">C</span>' : ''}
                                ${spell.ritual ? '<span class="badge">R</span>' : ''}
                            </span>
                        </div>
                        <div class="spell-level-school">${spell.level} · ${spell.school}</div>
                    </div>
                    ${showEditionToggle ? `
                    <div class="edition-toggle" onclick="event.stopPropagation()">
                        <button class="edition-toggle-btn ${selectedEdition === '2014' ? 'active' : ''}" onclick="setSpellEditionAndRerender('${spell.id}','2014')">2014</button>
                        <button class="edition-toggle-btn ${selectedEdition === '2024' ? 'active' : ''}" onclick="setSpellEditionAndRerender('${spell.id}','2024')">2024</button>
                    </div>
                    ` : ''}
                </div>
                <div class="spell-details ${detailsOpen ? '' : 'hidden'}">
                    Range: ${spell.range}<br>
                    Duration: ${spell.duration}<br>
                    Casting time: ${spell.castingTime}<br>
                    ${compStr ? `Components: ${compStr}<br>` : ''}
                    <span class="source-tooltip" style="color:var(--gold-dim);" title="${escapeHtml(SOURCE_NAMES[spell.source] || spell.source)}">Source: ${spell.source}</span><br>
                    <span style="color:var(--text-dim);font-size:12px;">${spell.classes.join(', ')}</span>
                </div>
                ${descClean ? `
                <div class="spell-desc-toggle" onclick="toggleSpellDesc(this, '${spell.id}')">${descOpen ? '▼' : '▶'} Description</div>
                <div class="spell-desc ${descOpen ? '' : 'hidden'}">${descClean.replace(/\n/g, '<br>')}</div>
                ` : ''}
                <div class="spell-action-bottom">
                    ${actions}
                </div>
            </div>
        `;
    }).join('');
}


function toggleSpellDesc(el, spellId){
    const desc = el.nextElementSibling;
    const open = !desc.classList.contains('hidden');
    desc.classList.toggle('hidden', open);
    el.textContent = (open ? '▶' : '▼') + ' Description';
    if(spellId){
        if(open) openDescriptionIds.delete(spellId);
        else openDescriptionIds.add(spellId);
    }
}

function toggleSpellDetails(el, spellId){
    const card = el.closest('.spell-card');
    const details = card.querySelector('.spell-details');
    if(!details) return;
    details.classList.toggle('hidden');
    if(spellId){
        manuallySetDetailIds.set(spellId, !details.classList.contains('hidden'));
    }
}

function togglePinSpell(spellId){
    const pinned = getPinnedSpells();
    const idx = pinned.indexOf(spellId);
    if(idx === -1) pinned.push(spellId);
    else pinned.splice(idx, 1);
    savePinnedSpells(pinned);
    renderSpellCards('prepared');
}

function setSpellEditionAndRerender(spellId, edition){
    setSpellEdition(spellId, edition);
    renderSpellCards(currentSpellTab);
}

function levelUpCharacter(){
    const characters = getCharacters();
    const character = characters.find(c => c.id === currentCharacterId);
    if(!character) return;

    const currentLevel = parseInt(character.level);
    if(currentLevel >= 20){
        alert('This character is already level 20, the maximum.');
        return;
    }

    const newLevel = currentLevel + 1;
    if(!confirm(`Level up ${character.name} from level ${currentLevel} to level ${newLevel}? This will recalculate spell slots and the preparation limit.`)) return;

    const oldSlots = character.spellSlots || {};
    character.level = String(newLevel);

    const newSlots = initSpellSlots(character);
    for(let i = 1; i <= 9; i++){
        const oldLevelSlots = oldSlots[i] || [];
        const newLevelSlots = newSlots[i] || [];
        if(oldLevelSlots.length > 0 && newLevelSlots.length >= oldLevelSlots.length){
            for(let j = 0; j < oldLevelSlots.length; j++){
                newLevelSlots[j] = oldLevelSlots[j];
            }
        }
        newSlots[i] = newLevelSlots;
    }
    character.spellSlots = newSlots;

    saveCharacters(characters);
    document.getElementById("spellbookTitle").textContent = character.name + " - Spellbook";
    renderSpellSlotTable(character);
    renderPreparationLimitBanner();
    renderConcentrationBanner();
    renderSpellCards(currentSpellTab);
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
    activeFilters = { levels: [], schools: [], classes: [character.class], sources: [], castingTimes: [], ritual: false, concentration: false };
    document.getElementById('filterClearBtn').style.display = 'block';

    document.getElementById("characterPage").classList.add("hidden");
    document.getElementById("spellbookPage").classList.remove("hidden");
    document.getElementById("spellbookTitle").textContent = character.name + " - Spellbook";

    const settingsPanel = document.getElementById('spellbookSettingsPanel');
    const settingsBtn = document.getElementById('spellbookSettingsBtn');
    if(settingsPanel) settingsPanel.classList.add('hidden');
    if(settingsBtn) settingsBtn.classList.remove('active');

    renderSpellSlotTable(character);
    renderConcentrationBanner();
    renderPreparationLimitBanner();
    updateDetailsDefaultBtn();
    showSpellTab('prepared');
}

function backToCharacterFromSpellbook(){
    document.getElementById("spellbookPage").classList.add("hidden");
    document.getElementById("characterPage").classList.remove("hidden");
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

