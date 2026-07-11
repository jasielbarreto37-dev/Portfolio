const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.casahDesc = document.getElementById("casahDesc")?.textContent;
    
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("casahDesc")) document.getElementById("casahDesc").textContent = defaultTexts.casahDesc;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="casah">${translations.es.casah}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("casahDesc")) {
            document.getElementById("casahDesc").textContent = translations.es.casahDesc;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}