function getSpellLevelNum(levelStr){
    if(levelStr === 'Cantrip') return 0;
    const m = String(levelStr).match(/\d+/);
    return m ? parseInt(m[0]) : 0;
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

function longRest(){
    if(!confirm('Take a Long Rest? This will restore all spell slots and end your concentration.')) return;
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
            if(!confirm('Take a Short Rest? This will restore your Pact Magic slots.')) return;
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

