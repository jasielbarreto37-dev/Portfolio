const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.minecraftDesc1 = document.getElementById("minecraftDesc1")?.textContent;
    defaultTexts.minecraftDesc2 = document.getElementById("minecraftDesc2")?.textContent;
    defaultTexts.minecraftDesc3 = document.getElementById("minecraftDesc3")?.textContent;
    defaultTexts.minecraftDesc4 = document.getElementById("minecraftDesc4")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("minecraftDesc1")) document.getElementById("minecraftDesc1").textContent = defaultTexts.minecraftDesc1;
        if (document.getElementById("minecraftDesc2")) document.getElementById("minecraftDesc2").textContent = defaultTexts.minecraftDesc2;
        if (document.getElementById("minecraftDesc3")) document.getElementById("minecraftDesc3").textContent = defaultTexts.minecraftDesc3;
        if (document.getElementById("minecraftDesc4")) document.getElementById("minecraftDesc4").textContent = defaultTexts.minecraftDesc4;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="minecraft">${translations.es.minecraft}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("minecraftDesc1")) {
            document.getElementById("minecraftDesc1").textContent = translations.es.minecraftDesc1;
        }
        if (document.getElementById("minecraftDesc2")) {
            document.getElementById("minecraftDesc2").textContent = translations.es.minecraftDesc2;
        }
        if (document.getElementById("minecraftDesc3")) {
            document.getElementById("minecraftDesc3").textContent = translations.es.minecraftDesc3;
        }
        if (document.getElementById("minecraftDesc4")) {
            document.getElementById("minecraftDesc4").textContent = translations.es.minecraftDesc4;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}