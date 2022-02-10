document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, classes='');
});

const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURL);

function changeURL() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.getElementById('header').innerHTML = langArr['header'][hash];
    document.getElementById('name').innerHTML = langArr['name'][hash];
    document.getElementById('bio_head').innerHTML = langArr['bio_head'][hash];
    document.getElementById('bio').innerHTML = langArr['bio'][hash];
    document.getElementById('prof_head').innerHTML = langArr['prof_head'][hash];
    document.getElementById('prof').innerHTML = langArr['prof'][hash];
    document.getElementById('facts_head').innerHTML = langArr['facts_head'][hash];
    document.getElementById('facts').innerHTML = langArr['facts'][hash];
}

changeLanguage();