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
        document.getElementById("characterSpellcastingMod").value = character.spellcastingAbilityMod ?? 0;
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
        characterInfo.replaceChildren(
            createTextElement('h3', character.name),
            createTextElement('p', 'Class: ' + character.class),
            createTextElement('p', 'Level: ' + character.level),
            createTextElement('p', 'Race: ' + character.race),
            createTextElement('p', 'Alignment: ' + character.alignment),
            createTextElement('p', 'Spellcasting modifier: ' + (character.spellcastingAbilityMod ?? 0))
        );
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
        const alignment = document.getElementById("characterAlignment").value;
        const spellcastingAbilityMod = parseInt(document.getElementById("characterSpellcastingMod").value || 0);
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
                spellcastingAbilityMod,
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
                spellcastingAbilityMod,
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
        document.getElementById("characterAlignment").value = "";
        document.getElementById("characterSpellcastingMod").value = "0";
        document.getElementById("characterSoundSet").value = "";
        document.getElementById("errorMessage").textContent = "";

        editingCharacterId = null;

        document.querySelector('#createCharacterPage h2').textContent = "Create Character";
        document.querySelector('#createCharacterPage .btn-green').textContent = "Create Character";

    }

