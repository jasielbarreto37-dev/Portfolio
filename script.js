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

    if(lang === "en"){

        localStorage.setItem("language","en");

        return;

    }

    document.getElementById("hero-subtitle").textContent =
        translations.es.heroSubtitle;

    document.getElementById("intro").textContent =
        translations.es.intro;
    
    document.getElementById("skill-1").textContent =
    translations.es.skill1;

    document.getElementById("skill-2").textContent =
    translations.es.skill2;

    document.getElementById("skill-3").textContent =
    translations.es.skill3;

    document.getElementById("skill-4").textContent =
    translations.es.skill4;

    document.getElementById("skill-5").textContent =
    translations.es.skill5;

    document.getElementById("availability").textContent =
    translations.es.availability;

    document.getElementById("contactPanel").textContent =
    translations.es.contactPanel;

    document.getElementById("footer").textContent =
    translations.es.footer;

    // Botón activo
    document.getElementById("btn-es")
        .classList.toggle("active", lang === "es");

    document.getElementById("btn-en")
        .classList.toggle("active", lang === "en");

    // Guardar idioma
    localStorage.setItem("language", lang);

}