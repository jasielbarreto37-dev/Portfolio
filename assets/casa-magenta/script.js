const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.CasMagDesc1 = document.getElementById("CasMagDesc1")?.textContent;
    defaultTexts.CasMagDesc2 = document.getElementById("CasMagDesc2")?.textContent;
    defaultTexts.CasMagDesc3 = document.getElementById("CasMagDesc3")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("CasMagDesc1")) document.getElementById("CasMagDesc1").textContent = defaultTexts.CasMagDesc1;
        if (document.getElementById("CasMagDesc2")) document.getElementById("CasMagDesc2").textContent = defaultTexts.CasMagDesc2;
        if (document.getElementById("CasMagDesc3")) document.getElementById("CasMagDesc3").textContent = defaultTexts.CasMagDesc3;
    } else {
        // ===== Traducir al español =====
        // Usamos tus variables exactas del translations.js
        if (document.getElementById("projectTitle")) {
            // CORREGIDO: Cambiado bonolitos por casaMagenta
            document.getElementById("projectTitle").innerHTML = `${translations.es.projectTitle} <span id="casaMagenta">${translations.es.casaMagenta}</span>`;
        }
        if (document.getElementById("backToPortfolio")) {
            document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        }
        if (document.getElementById("CasMagDesc1")) {
            document.getElementById("CasMagDesc1").textContent = translations.es.CasMagDesc1;
        }
        if (document.getElementById("CasMagDesc2")) {
            document.getElementById("CasMagDesc2").textContent = translations.es.CasMagDesc2;
        }
        if (document.getElementById("CasMagDesc3")) {
            document.getElementById("CasMagDesc3").textContent = translations.es.CasMagDesc3;
        }
    }

    // ===== Botón activo =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}