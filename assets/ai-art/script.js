const defaultTexts = {};

document.addEventListener("DOMContentLoaded", () => {

    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    btnEs.addEventListener("click", () => setLanguage("es"));
    btnEn.addEventListener("click", () => setLanguage("en"));

    // ===== Guardar textos originales (inglés) =====

    defaultTexts.projectTitle =
        document.getElementById("projectTitle").textContent;

    defaultTexts.backToPortfolio =
        document.getElementById("backToPortfolio").textContent;

    defaultTexts.AiArt =
        document.getElementById("AiArt").textContent;

    defaultTexts.AiArtDesc =
        document.getElementById("AiArtDesc").textContent;

    // Cargar idioma guardado
    const savedLanguage =
        localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

});

function setLanguage(lang){

    if(lang === "en"){

    // ===== Restaurar inglés =====

        document.getElementById("projectTitle").textContent =
            defaultTexts.projectTitle;

        document.getElementById("backToPortfolio").textContent =
            defaultTexts.backToPortfolio;

        document.getElementById("AiArt").textContent =
            defaultTexts.AiArt;

        document.getElementById("AiArtDesc").textContent =
            defaultTexts.AiArtDesc;

        }else{

        // ===== Traducir al español =====

        document.getElementById("projectTitle").textContent =
            translations.es.projectTitle;

        document.getElementById("backToPortfolio").textContent =
            translations.es.backToPortfolio;

        document.getElementById("AiArt").textContent =
            translations.es.AiArt;

        document.getElementById("AiArtDesc").textContent =
            translations.es.AiArtDesc;

    }

    // ===== Botón activo =====

    document.getElementById("btn-es")
        .classList.toggle("active", lang === "es");

    document.getElementById("btn-en")
        .classList.toggle("active", lang === "en");

    // ===== Guardar idioma =====

    localStorage.setItem("language", lang);

}
