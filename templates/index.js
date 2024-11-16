
function initContactForm() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire

        // Récupérer les données du formulaire
        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var email = $('#email').val();
        var message = $('#message').val();



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


