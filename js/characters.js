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

    function backFromCharacterForm(){
        const wasEditing = editingCharacterId !== null;
        const characterId = editingCharacterId;

        document.getElementById("createCharacterPage").classList.add("hidden");
        clearForm();

        if(wasEditing && characterId){
            openCharacter(characterId);
        } else {
            document.getElementById("mainPage").classList.remove("hidden");
        }
    }

    window.backFromCharacterForm = backFromCharacterForm;

    function editCharacter(id){

        const characters = getCharacters();

        const character = characters.find(c => c.id === id);

        if(!character) return;

        editingCharacterId = id;

        document.getElementById("characterName").value = character.name;
        document.getElementById("characterClass").value = character.class;
        document.getElementById("characterLevel").value = character.level;
        document.getElementById("characterRace").value = character.race;
        document.getElementById("characterSpellcastingMod").value = character.spellcastingAbilityMod ?? 0;
        document.getElementById("characterSpellSaveDC").value = character.spellSaveDC ?? '';
        document.getElementById("characterSpellAttackBonus").value = character.spellAttackBonus ?? '';
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

        const characterInfo = document.getElementById("characterInfo");

        const leftCol = document.createElement('div');
        leftCol.className = 'character-info-col';
        leftCol.append(
            createTextElement('p', 'Class: ' + character.class),
            createTextElement('p', 'Level: ' + character.level),
            createTextElement('p', 'Race: ' + character.race)
        );

        const rightCol = document.createElement('div');
        rightCol.className = 'character-info-col';
        rightCol.append(
            createTextElement('p', 'Spellcasting modifier: ' + (character.spellcastingAbilityMod ?? 0))
        );
        if(character.spellAttackBonus !== undefined && character.spellAttackBonus !== null && character.spellAttackBonus !== ''){
            const bonusVal = character.spellAttackBonus;
            rightCol.append(createTextElement('p', 'Spell Attack Bonus: ' + (bonusVal >= 0 ? '+' : '') + bonusVal));
        }
        if(character.spellSaveDC !== undefined && character.spellSaveDC !== null && character.spellSaveDC !== ''){
            rightCol.append(createTextElement('p', 'Spell Save DC: ' + character.spellSaveDC));
        }

        const grid = document.createElement('div');
        grid.className = 'character-info-grid';
        grid.append(leftCol, rightCol);

        characterInfo.replaceChildren(createTextElement('h3', character.name), grid);
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

function createCharacter(){

        const name = document.getElementById("characterName").value.trim();
        const characterClass = document.getElementById("characterClass").value;
        const level = document.getElementById("characterLevel").value;
        const race = document.getElementById("characterRace").value;
        const spellcastingModFieldRaw = document.getElementById("characterSpellcastingMod").value;
        const spellcastingModRaw = parseInt(spellcastingModFieldRaw || 0);
        const spellcastingAbilityMod = Math.min(10, Math.max(-5, isNaN(spellcastingModRaw) ? 0 : spellcastingModRaw));
        document.getElementById("characterSpellcastingMod").value = spellcastingAbilityMod;
        const spellSaveDCRaw = document.getElementById("characterSpellSaveDC").value;
        const spellSaveDC = spellSaveDCRaw === '' ? null : parseInt(spellSaveDCRaw);
        const spellAttackBonusRaw = document.getElementById("characterSpellAttackBonus").value;
        const spellAttackBonus = spellAttackBonusRaw === '' ? null : parseInt(spellAttackBonusRaw);
        const soundSet = document.getElementById("characterSoundSet").value;

        const errorMessage = document.getElementById("errorMessage");

        const fieldsToCheck = [
            { el: document.getElementById("characterName"), valid: !!name },
            { el: document.getElementById("characterClass"), valid: !!characterClass },
            { el: document.getElementById("characterLevel"), valid: !!level },
            { el: document.getElementById("characterRace"), valid: !!race },
            { el: document.getElementById("characterSpellcastingMod"), valid: spellcastingModFieldRaw !== '' }
        ];

        let hasInvalid = false;
        fieldsToCheck.forEach(f => {
            f.el.classList.toggle('invalid', !f.valid);
            if(!f.valid) hasInvalid = true;
        });

        if(hasInvalid){
            errorMessage.textContent = "Please fill in all required fields (highlighted in red).";
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
                spellcastingAbilityMod,
                spellSaveDC,
                spellAttackBonus,
                soundSet,
                spellSlots: oldChar.spellSlots
            };

            // Check whether this change drops spells the character can no longer cast
            if(levelChanged || classChanged){
                const oldMaxLevel = getMaxAvailableSpellLevel(oldChar);
                const newMaxLevel = getMaxAvailableSpellLevel(updatedChar);

                if(newMaxLevel < oldMaxLevel){
                    const previousCharacterId = currentCharacterId;
                    currentCharacterId = editingCharacterId;

                    const known = getKnownSpells();
                    const lostSpellIds = known.filter(spellId => {
                        const spell = SPELL_DATABASE.find(s => s.id === spellId);
                        return spell && getSpellLevelNum(spell.level) > newMaxLevel;
                    });

                    if(lostSpellIds.length > 0){
                        const lostNames = lostSpellIds
                            .map(id => SPELL_DATABASE.find(s => s.id === id))
                            .filter(Boolean)
                            .map(s => s.name);

                        const confirmMsg = `Lowering this character's level/class will remove ${lostSpellIds.length} spell${lostSpellIds.length === 1 ? '' : 's'} above your new maximum spell level (${newMaxLevel === 0 ? 'cantrips only' : 'level ' + newMaxLevel}):\n\n${lostNames.join(', ')}\n\nContinue?`;

                        if(!confirm(confirmMsg)){
                            currentCharacterId = previousCharacterId;
                            return;
                        }

                        lostSpellIds.forEach(spellId => removeFromBook(spellId));

                        const pinned = getPinnedSpells().filter(id => !lostSpellIds.includes(id));
                        savePinnedSpells(pinned);

                        const activeConcentrationName = getActiveConcentration();
                        if(activeConcentrationName){
                            const lostActive = lostSpellIds
                                .map(id => SPELL_DATABASE.find(s => s.id === id))
                                .find(s => s && s.name === activeConcentrationName);
                            if(lostActive) setActiveConcentration(null);
                        }
                    }

                    currentCharacterId = previousCharacterId;
                }
            }

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
                spellcastingAbilityMod,
                spellSaveDC,
                spellAttackBonus,
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

            const details = document.createElement("div");
            details.append(
                createTextElement("div", character.name, "character-card-name"),
                createTextElement("div", `Lvl ${character.level} ${character.class} · ${character.race}`, "character-card-meta")
            );

            const arrow = createTextElement("span", "›", "character-card-arrow");
            card.append(details, arrow);
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
        document.getElementById("characterSpellcastingMod").value = "0";
        document.getElementById("characterSpellSaveDC").value = "";
        document.getElementById("characterSpellAttackBonus").value = "";
        document.getElementById("characterSoundSet").value = "";
        document.getElementById("errorMessage").textContent = "";

        editingCharacterId = null;

        document.querySelector('#createCharacterPage h2').textContent = "Create Character";
        document.querySelector('#createCharacterPage .btn-green').textContent = "Create Character";

        document.querySelectorAll('.required-field').forEach(el => el.classList.remove('invalid'));

    }

    document.querySelectorAll('.required-field').forEach(el => {
        const clearInvalid = () => {
            if(el.value !== ''){
                el.classList.remove('invalid');
            }
        };
        el.addEventListener('input', clearInvalid);
        el.addEventListener('change', clearInvalid);
    });

