function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('appTheme', theme);
    updateThemeButtons();
}

function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function escapeJsString(value){
    return String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function createTextElement(tagName, text, className){
    const el = document.createElement(tagName);
    el.textContent = text;
    if(className) el.className = className;
    return el;
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

