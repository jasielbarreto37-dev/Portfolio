const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.thumbDesc1 = document.getElementById("thumbDesc1")?.textContent;
    defaultTexts.thumbDesc2 = document.getElementById("thumbDesc2")?.textContent;
    defaultTexts.thumbDesc3 = document.getElementById("thumbDesc3")?.textContent;
    defaultTexts.thumbDesc4 = document.getElementById("thumbDesc4")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("thumbDesc1")) document.getElementById("thumbDesc1").textContent = defaultTexts.thumbDesc1;
        if (document.getElementById("thumbDesc2")) document.getElementById("thumbDesc2").textContent = defaultTexts.thumbDesc2;
        if (document.getElementById("thumbDesc3")) document.getElementById("thumbDesc3").textContent = defaultTexts.thumbDesc3;
        if (document.getElementById("thumbDesc4")) document.getElementById("thumbDesc4").textContent = defaultTexts.thumbDesc4;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="thumbnails">${translations.es.thumbnails}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("thumbDesc1")) {
            document.getElementById("thumbDesc1").textContent = translations.es.thumbDesc1;
        }
        if (document.getElementById("thumbDesc2")) {
            document.getElementById("thumbDesc2").textContent = translations.es.thumbDesc2;
        }
        if (document.getElementById("thumbDesc3")) {
            document.getElementById("thumbDesc3").textContent = translations.es.thumbDesc3;
        }
        if (document.getElementById("thumbDesc4")) {
            document.getElementById("thumbDesc4").textContent = translations.es.thumbDesc4;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}