/**
 * Contact Form Module
 * Gère le formulaire de contact et la capture UTM
 */
(function() {
  'use strict';

  // Capture des paramètres UTM
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = document.getElementById('utm_source');
  const utmCampaign = document.getElementById('utm_campaign');

  if (utmSource) utmSource.value = urlParams.get('utm_source') || '';
  if (utmCampaign) utmCampaign.value = urlParams.get('utm_campaign') || '';

  // Gestion du formulaire
  const contactFormEl = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!contactFormEl) return;

  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    formStatus.style.display = 'block';
  }

  contactFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const adresse = document.getElementById('adresse').value.trim();
    const tel = document.getElementById('telephone').value.trim();
    const message = document.getElementById('message').value.trim();
    const rgpd = document.getElementById('rgpd').checked;

    // Validation côté client
    if (!nom || !adresse || !tel || !message) {
      showFormStatus('Veuillez remplir tous les champs obligatoires', 'error');
      return;
    }

    if (!rgpd) {
      showFormStatus('Veuillez accepter la politique de confidentialité', 'error');
      return;
    }

    // Afficher le message d'envoi
    showFormStatus('Envoi en cours...', 'success');

    // Désactiver le bouton de soumission
    const submitBtn = contactFormEl.querySelector('button[type="submit"]');
    const btnTextOriginal = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Envoi en cours...';

    try {
      // Préparer les données du formulaire avec les fichiers
      const formData = new FormData(contactFormEl);

      // Envoi au serveur PHP
      const response = await fetch('/submit-contact.php', {
        method: 'POST',
        body: formData
      });

      // Vérifier si la réponse est OK
      if (!response.ok) {
        console.error('HTTP Error:', response.status, response.statusText);
      }

      const result = await response.json();

      // Afficher les infos de debug en console
      if (result.debug) {
        console.log('DEBUG INFO:', result.debug);
      }

      if (result.success) {
        showFormStatus(result.message, 'success');
        contactFormEl.reset();

        // Masquer le message après 5 secondes
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      } else {
        let errorMsg = result.message || 'Une erreur est survenue';
        // Ajouter l'info de debug si disponible
        if (result.debug && result.debug.error) {
          errorMsg += '\n\nDétails: ' + result.debug.error;
        }
        showFormStatus(errorMsg, 'error');
      }
    } catch (error) {
      console.error('Erreur complète:', error);
      showFormStatus('Erreur de connexion: ' + error.message + '\n\nOuvrez la console (F12) pour plus de détails.', 'error');
    } finally {
      // Réactiver le bouton
      submitBtn.disabled = false;
      submitBtn.innerHTML = btnTextOriginal;
    }
  });

  // Validation des fichiers
  const fileInput = document.getElementById('fichiers');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      if (files.length > 5) {
        alert('Maximum 5 fichiers autorisés');
        fileInput.value = '';
        return;
      }
      for (let file of files) {
        if (file.size > 25 * 1024 * 1024) {
          alert(`Le fichier "${file.name}" dépasse 25 Mo`);
          fileInput.value = '';
          return;
        }
      }
    });
  }
})();
