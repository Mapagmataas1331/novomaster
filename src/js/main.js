document.getElementById("settings").addEventListener("click", () => {
    const sm = document.getElementById("settingsMenu");
    if (sm.style.display == "none") {
        sm.style.display = "block";
    } else {
        sm.style.display = "none";
    }
});

function changeLang(v) {
    const eng = document.getElementById("langEnglish");
    const rus = document.getElementById("langRussian");
    const elemsArr = ["langMaster", "langAuthor", "langSettings", "langLanguage", "langEnglish", "langRussian", "langTheme", "langDark", "langLight"];
    var langArr;
    if (!v) {
        langArr = ["aster", "Author", "Settings", "Language:", "English", "Russian", "Theme:", "Dark", "Light"];
        eng.classList.add("cur");
        rus.classList.remove("cur");
    } else {
        langArr = ["астер", "Автор", "Настройки", "Язык:", "Английский", "Русский", "Тема:", "Тёмная", "Светлая"];
        eng.classList.remove("cur");
        rus.classList.add("cur");
    }
    for (var i = 0; i < elemsArr.length; i++) {
        var curel = document.getElementById(elemsArr[i]);
        if (typeof(curel) != 'undefined' && curel != null) {
            curel.innerHTML = langArr[i];
        }
    }
}

function changeTheme(v) {
    const body = document.querySelector("body");
    const dark = document.getElementById("langDark");
    const light = document.getElementById("langLight");
    if (!v) {
        body.classList.remove("light");
        dark.classList.add("cur");
        light.classList.remove("cur");
    } else {
        body.classList.add("light");
        dark.classList.remove("cur");
        light.classList.add("cur");
    }
}