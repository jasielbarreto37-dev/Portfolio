const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    // Ponemos un "if" para que solo intente escuchar el click si los botones existen en el HTML
    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====
    // Guardamos el HTML interno del título para no romper el span dorado
    defaultTexts.projectTitle = document.getElementById("projectTitle")?.innerHTML;
    defaultTexts.backToPortfolio = document.getElementById("backToPortfolio")?.textContent;
    defaultTexts.AiArtDesc = document.getElementById("AiArtDesc")?.textContent;

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    if (lang === "en") {
        // ===== Restaurar inglés =====
        if (document.getElementById("projectTitle")) document.getElementById("projectTitle").innerHTML = defaultTexts.projectTitle;
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = defaultTexts.backToPortfolio;
        if (document.getElementById("AiArtDesc")) document.getElementById("AiArtDesc").textContent = defaultTexts.AiArtDesc;
    } else {
        // ===== Traducir al español =====
        // Aquí puedes meter directamente la etiqueta span para mantener tu estilo dorado
        if (document.getElementById("projectTitle")) {
            document.getElementById("projectTitle").innerHTML = `Proyecto: <span id="AiArt">${translations.es.AiArt}</span>`;
        }
        if (document.getElementById("backToPortfolio")) document.getElementById("backToPortfolio").textContent = translations.es.backToPortfolio;
        if (document.getElementById("AiArtDesc")) document.getElementById("AiArtDesc").textContent = translations.es.AiArtDesc;
    }

    // ===== Botón activo (solo si existen en la página) =====
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====
    localStorage.setItem("language", lang);
}