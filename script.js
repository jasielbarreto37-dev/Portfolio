document.addEventListener("DOMContentLoaded", () => {

    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    btnEs.addEventListener("click", () => setLanguage("es"));
    btnEn.addEventListener("click", () => setLanguage("en"));

    const savedLanguage =
        localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

});

function setLanguage(lang){

    // Cambiar textos
    document.getElementById("hero-subtitle").textContent =
        translations[lang].heroSubtitle;

    document.getElementById("intro").textContent =
        translations[lang].intro;
    
    document.getElementById("skill-1").textContent =
    translations[lang].skill1;

    document.getElementById("skill-2").textContent =
    translations[lang].skill2;

    document.getElementById("skill-3").textContent =
    translations[lang].skill3;

    document.getElementById("skill-4").textContent =
    translations[lang].skill4;

    document.getElementById("skill-5").textContent =
    translations[lang].skill5;

    document.getElementById("availability").textContent =
    translations[lang].availability;

    document.getElementById("contactPanel").textContent =
    translations[lang].contactPanel;

    document.getElementById("footer").textContent =
    translations[lang].footer;

    // Botón activo
    document.getElementById("btn-es")
        .classList.toggle("active", lang === "es");

    document.getElementById("btn-en")
        .classList.toggle("active", lang === "en");

    // Guardar idioma
    localStorage.setItem("language", lang);

}