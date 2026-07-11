const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.voicesDesc1 = document.getElementById("voicesDesc1")?.textContent;
    defaultTexts.voicesDesc2 = document.getElementById("voicesDesc2")?.textContent;
    defaultTexts.voicesDesc3 = document.getElementById("voicesDesc3")?.textContent;
   
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("voicesDesc1")) document.getElementById("voicesDesc1").textContent = defaultTexts.voicesDesc1;
        if (document.getElementById("voicesDesc2")) document.getElementById("voicesDesc2").textContent = defaultTexts.voicesDesc2;
        if (document.getElementById("voicesDesc3")) document.getElementById("voicesDesc3").textContent = defaultTexts.voicesDesc3;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="voices">${translations.es.voices}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("voicesDesc1")) {
            document.getElementById("voicesDesc1").textContent = translations.es.voicesDesc1;
        }
        if (document.getElementById("voicesDesc2")) {
            document.getElementById("voicesDesc2").textContent = translations.es.voicesDesc2;
        }
        if (document.getElementById("voicesDesc3")) {
            document.getElementById("voicesDesc3").textContent = translations.es.voicesDesc3;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}