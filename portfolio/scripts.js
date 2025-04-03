document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    const texts = {
        es: {
            descripcion: "Desarrollador de aplicaciones y diseñador UX/UI.",
            sobreMiTitulo: "Sobre Mí",
            sobreMiTexto: "Aquí puedes escribir información sobre ti, tu experiencia y habilidades.",
            proyectosTitulo: "Proyectos",
            proyectosTexto: "Aquí mostrarás tus proyectos con enlaces y descripciones.",
            contactoTitulo: "Contacto",
            contactoTexto: "Deja tu información de contacto o formulario.",
            navInicio: "Inicio",
            navSobreMi: "Sobre Mí",
            navProyectos: "Proyectos",
            navContacto: "Contacto"
        },
        en: {
            descripcion: "Application developer and UX/UI designer.",
            sobreMiTitulo: "About Me",
            sobreMiTexto: "Here you can write information about yourself, your experience, and skills.",
            proyectosTitulo: "Projects",
            proyectosTexto: "Here you will showcase your projects with links and descriptions.",
            contactoTitulo: "Contact",
            contactoTexto: "Leave your contact information or form.",
            navInicio: "Home",
            navSobreMi: "About Me",
            navProyectos: "Projects",
            navContacto: "Contact"
        }
    };

    function toggleLanguage() {
        let currentLang = languageToggle.textContent.trim();
        let newLang = currentLang === "ES" ? "EN" : "ES";
        languageToggle.textContent = newLang;
        
        let selectedTexts = newLang === "ES" ? texts.es : texts.en;
        document.querySelectorAll("[data-lang]").forEach(element => {
            let key = element.getAttribute("data-lang");
            if (selectedTexts[key]) {
                element.textContent = selectedTexts[key];
            }
        });
        
        document.querySelector("nav ul li:nth-child(1) a").textContent = selectedTexts.navInicio;
        document.querySelector("nav ul li:nth-child(2) a").textContent = selectedTexts.navSobreMi;
        document.querySelector("nav ul li:nth-child(3) a").textContent = selectedTexts.navProyectos;
        document.querySelector("nav ul li:nth-child(4) a").textContent = selectedTexts.navContacto;
    }

    languageToggle.addEventListener("click", toggleLanguage);

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");

   
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });


    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });
});
