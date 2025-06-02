const languageSwitcher = document.getElementById("languageSwitcher");
const elementsToTranslate = document.querySelectorAll("[data-i18n]");

languageSwitcher.addEventListener("change", () => {
    const lang = languageSwitcher.value;
    loadLanguage(lang);
});

function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) {
                    el.textContent = data[key];
                }
            });
        });
}

// Sayfa yüklendiğinde varsayılan dili yükle
window.addEventListener("DOMContentLoaded", () => {
    loadLanguage("tr");
});