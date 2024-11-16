/**
 * Template Name: QuickStart
 * Template URL: https://bootstrapmade.com/quickstart-bootstrap-startup-website-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
    "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }

    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    window.addEventListener('load', aosInit);

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
            faqItem.parentNode.classList.toggle('faq-active');
        });
    });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
            let config = JSON.parse(
                swiperElement.querySelector(".swiper-config").innerHTML.trim()
            );

            if (swiperElement.classList.contains("swiper-tab")) {
                initSwiperWithCustomPagination(swiperElement, config);
            } else {
                new Swiper(swiperElement, config);
            }
        });
    }

    window.addEventListener("load", initSwiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function (e) {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                setTimeout(() => {
                    let section = document.querySelector(window.location.hash);
                    let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                    window.scrollTo({
                        top: section.offsetTop - parseInt(scrollMarginTop),
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');


    // Fonction pour activer le Scrollspy sur le menu de navigation
    function navmenuScrollspy() {
        navmenulinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
            } else {
                navmenulink.classList.remove('active');
            }
        });
    }

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

// Fonction pour gérer les changements des cases à cocher
    function chkBoxProjet() {
        const chkEcole = document.getElementById("checkTpEcole");
        const chkEntreprise = document.getElementById("checkTpEntreprise");
        const chkPerso = document.getElementById("checkTpPerso");

        // Logique pour afficher/masquer les projets en fonction des cases cochées
        const projectsEcole = document.querySelectorAll('.ecole');
        const projectsEntreprise = document.querySelectorAll('.entreprise');
        const projectsPerso = document.querySelectorAll('.perso');

        projectsEcole.forEach(project => project.style.display = chkEcole.checked ? 'block' : 'none');
        projectsEntreprise.forEach(project => project.style.display = chkEntreprise.checked ? 'block' : 'none');
        projectsPerso.forEach(project => project.style.display = chkPerso.checked ? 'block' : 'none');
    }

    document.getElementById('checkTpEcole').addEventListener('change', chkBoxProjet);
    document.getElementById('checkTpPerso').addEventListener('change', chkBoxProjet);
    document.getElementById('checkTpEntreprise').addEventListener('change', chkBoxProjet);

})();

async function chkboxTp() {
    const chkEcole = document.getElementById("checkTpEcole");
    const chkEntreprise = document.getElementById("checkTpEntreprise");
    const chkPerso = document.getElementById("checkTpPerso");

    // Sélectionner tous les projets
    const allProjects = document.querySelectorAll('.ecole, .entreprise, .perso');

    // Afficher tous les projets par défaut
    allProjects.forEach(project => project.style.display = "block");

    const isEcoleChecked = chkEcole.checked;
    const isEntrepriseChecked = chkEntreprise.checked;
    const isPersoChecked = chkPerso.checked;

    if (isEcoleChecked) {
        document.querySelectorAll('.ecole').forEach(project => project.style.display = "block");
    } else {
        document.querySelectorAll('.ecole').forEach(project => project.style.display = "none");
    }
    if (isEntrepriseChecked) {
        document.querySelectorAll('.entreprise').forEach(project => project.style.display = "block");
    } else {
        document.querySelectorAll('.entreprise').forEach(project => project.style.display = "none");
    }
    if (isPersoChecked) {
        document.querySelectorAll('.perso').forEach(project => project.style.display = "block");
    } else {
        document.querySelectorAll('.perso').forEach(project => project.style.display = "none");
    }
    if (!isEcoleChecked && !isPersoChecked && !isEntrepriseChecked) {
        document.querySelectorAll('.ecole, .entreprise, .perso').forEach(project => project.style.display = "block");
    }


}


chkboxTp();

function clickButtonContact() {
    const button = document.getElementById("contactButton")
    const form = document.getElementById("contact")
    button.addEventListener("click", function () {
        form.scrollIntoView({behavior: 'smooth'});
    })

}

clickButtonContact();

function messgeSend() {
    const messageSend = document.getElementById('contactForm')
    messageSend.addEventListener("submit", function () {
        let formulaire = new FormData(this);

        fetch('/messageSend', {
            method: 'POST',
            body: 'formulaire'

        })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: 'Succès!',
                        text: 'Votre message a été envoyé.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    console.log('message envoyé')
                }
                else Swal.fire({
                    title: 'Erreur',
                    text: "Votre envoi ne s'est pas effectuer",
                    icon: 'erreur',
                    confirmButtonText: 'Ok'
                })
                ;
                console.error('erreur message non envoyé');
            })


    })
}
messgeSend();

// contact-form.js

function initContactForm() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire

        // Récupérer les données du formulaire
        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var recaptcha = grecaptcha.getResponse(); // Si tu utilises reCAPTCHA



        // Envoi des données via AJAX
        $.ajax({
            url: '/formulaire',  // L'URL de la route qui gère le formulaire
            type: 'POST',
            data: {
                nom: nom,
                prenom: prenom,
                email: email,
                message: message,
            },
            success: function(response) {
                // Affichage du message en fonction de la réponse
                $('#messageResponse').html('<div class="alert alert-' + (response.status === 'success' ? 'success' : 'danger') + '">' + response.message + '</div>');

                // Réinitialiser le formulaire après l'envoi
                $('#contactForm')[0].reset();
            },
            error: function(xhr, status, error) {
                // Affichage du message d'erreur
                $('#messageResponse').html('<div class="alert alert-danger">Une erreur est survenue. Veuillez réessayer plus tard.</div>');
            }
        });
    });
}

// Initialiser la fonction après le chargement du DOM
$(document).ready(function() {
    initContactForm();
});


