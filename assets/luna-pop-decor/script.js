const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.lunaDesc1 = document.getElementById("lunaDesc1")?.textContent;
    defaultTexts.lunaDesc2 = document.getElementById("lunaDesc2")?.textContent;
    defaultTexts.lunaDesc3 = document.getElementById("lunaDesc3")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("lunaDesc1")) document.getElementById("lunaDesc1").textContent = defaultTexts.lunaDesc1;
        if (document.getElementById("lunaDesc2")) document.getElementById("lunaDesc2").textContent = defaultTexts.lunaDesc2;
        if (document.getElementById("lunaDesc3")) document.getElementById("lunaDesc3").textContent = defaultTexts.lunaDesc3;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="lunaPop">${translations.es.lunaPop}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("lunaDesc1")) {
            document.getElementById("lunaDesc1").textContent = translations.es.lunaDesc1;
        }
        if (document.getElementById("lunaDesc2")) {
            document.getElementById("lunaDesc2").textContent = translations.es.lunaDesc2;
        }
        if (document.getElementById("lunaDesc3")) {
            document.getElementById("lunaDesc3").textContent = translations.es.lunaDesc3;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}