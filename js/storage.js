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

function getPinnedSpells(){
    const data = JSON.parse(localStorage.getItem('pinnedSpells') || '{}');
    return data[currentCharacterId] || [];
}

function savePinnedSpells(list){
    const data = JSON.parse(localStorage.getItem('pinnedSpells') || '{}');
    data[currentCharacterId] = list;
    localStorage.setItem('pinnedSpells', JSON.stringify(data));
}

function getSpellEdition(spellId){
    const charData = spellEditionPreferences[currentCharacterId] || {};
    return charData[spellId] || '2024';
}

function setSpellEdition(spellId, edition){
    if(!spellEditionPreferences[currentCharacterId]) spellEditionPreferences[currentCharacterId] = {};
    spellEditionPreferences[currentCharacterId][spellId] = edition;
    localStorage.setItem('spellEditionPreferences', JSON.stringify(spellEditionPreferences));
}

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
            pinnedSpells: JSON.parse(localStorage.getItem('pinnedSpells') || '{}'),
            activeConcentration: JSON.parse(localStorage.getItem('activeConcentration') || '{}'),
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
                localStorage.setItem('pinnedSpells', JSON.stringify(data.pinnedSpells || {}));
                localStorage.setItem('activeConcentration', JSON.stringify(data.activeConcentration || {}));
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

