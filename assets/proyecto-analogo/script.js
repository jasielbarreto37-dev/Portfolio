const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.overviewMain = document.getElementById("overviewMain")?.textContent;
    defaultTexts.overviewDesc = document.getElementById("overviewDesc")?.textContent;
    defaultTexts.playButton = document.getElementById("playButton")?.textContent;
    defaultTexts.proyectoAnDesc1 = document.getElementById("proyectoAnDesc1")?.textContent;
    defaultTexts.proyectoAnDesc2 = document.getElementById("proyectoAnDesc2")?.textContent;
    defaultTexts.proyectoAnDesc3 = document.getElementById("proyectoAnDesc3")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("overviewMain")) document.getElementById("overviewMain").textContent = defaultTexts.overviewMain;
        if (document.getElementById("overviewDesc")) document.getElementById("overviewDesc").textContent = defaultTexts.overviewDesc;
        if (document.getElementById("playButton")) document.getElementById("playButton").textContent = defaultTexts.playButton;
        if (document.getElementById("proyectoAnDesc1")) document.getElementById("proyectoAnDesc1").textContent = defaultTexts.proyectoAnDesc1;
        if (document.getElementById("proyectoAnDesc2")) document.getElementById("proyectoAnDesc2").textContent = defaultTexts.proyectoAnDesc2;
        if (document.getElementById("proyectoAnDesc3")) document.getElementById("proyectoAnDesc3").textContent = defaultTexts.proyectoAnDesc3;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="proyectoAnalogo">${translations.es.proyectoAnalogo}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("overviewMain")) {
            document.getElementById("overviewMain").textContent = translations.es.overviewMain;
        }
        if (document.getElementById("overviewDesc")) {
            document.getElementById("overviewDesc").textContent = translations.es.overviewDesc;
        }
        if (document.getElementById("playButton")) {
            document.getElementById("playButton").textContent = translations.es.playButton;
        }
        if (document.getElementById("proyectoAnDesc1")) {
            document.getElementById("proyectoAnDesc1").textContent = translations.es.proyectoAnDesc1;
        }
        if (document.getElementById("proyectoAnDesc2")) {
            document.getElementById("proyectoAnDesc2").textContent = translations.es.proyectoAnDesc2;
        }
        if (document.getElementById("proyectoAnDesc3")) {
            document.getElementById("proyectoAnDesc3").textContent = translations.es.proyectoAnDesc3;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}