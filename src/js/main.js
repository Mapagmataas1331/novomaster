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
    const elemsArr = ["langMaster", "langAbout", "langSettings", "langSettingsTitle", "langLanguage", "langEnglish", "langRussian",
    "langTheme", "langDark", "langLight", "langCurProj", "langProj1", "langAboutProj1", "langProj2",
    "langAboutProj2", "langProj3", "langAboutProj3", "langName", "langAdditional"];
    var langArr;
    if (!v) {
        langArr = ["aster", "About", "Settings", "Settings", "Language:", "English", "Russian",
        "Theme:", "Dark", "Light", "Current projects:", "1. First project", "About first project", "2. Second project",
        "About second project", "3. Third project", "About third project", "Surname Firstname", "Additional information"];
        eng.classList.add("cur");
        rus.classList.remove("cur");
    } else {
        langArr = ["астер", "Информация", "Настройки", "Настройки", "Язык:", "Английский", "Русский",
        "Тема:", "Тёмная", "Светлая", "Текущие проекты:", "1. Первый проект", "О первом проекте", "2. Второй проект",
        "О втором проекте", "3. Третий проект", "О третьем проекте", "Фамилия Имя", "Дополнительная информация"];
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