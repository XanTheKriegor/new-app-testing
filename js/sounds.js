async function pickSoundsFolder(){
    if(!window.showDirectoryPicker){
        alert('Your browser does not support picking a local sounds folder. Built-in sound sets can still play from the app folder.');
        return;
    }

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
                onclick="selectSpellSound('${escapeJsString(spellId)}', '${escapeJsString(f.path)}')">
                ${customSpellSounds[spellId] === f.path ? '✔ ' : ''}${escapeHtml(f.path)}
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

