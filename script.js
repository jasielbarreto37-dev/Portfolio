function setLanguage(lang) {

    document.getElementById("hero-title").textContent =
        translations[lang].heroTitle;

    document.getElementById("intro").textContent =
        translations[lang].intro;

    // Guardar idioma seleccionado
    localStorage.setItem("language", lang);

}

// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", () => {

    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    btnEs.addEventListener("click", () => setLanguage("es"));
    btnEn.addEventListener("click", () => setLanguage("en"));

    // Cargar el idioma guardado
    const savedLanguage = localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

});