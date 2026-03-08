/**
 * City Page Module
 * Charge dynamiquement les informations d'une ville depuis le JSON
 */
(function() {
  'use strict';

  const url = new URL(window.location.href);
  let slug = url.searchParams.get('slug');

  // Si pas de slug en paramètre, extraire de l'URL
  if (!slug) {
    const parts = url.pathname.split('/').filter(Boolean);
    slug = parts[parts.length - 1];
  }

  // Chargement des données de la ville
  fetch('/data/cities.json')
    .then(r => r.json())
    .then(db => {
      const city = db[slug];

      if (!city) {
        location.href = '/zones-intervention.html';
        return;
      }

      // Mise à jour des méta-données
      const title = `Décapage laser à ${city.label} | RenovLaser`;
      const desc = `Artisan mobile depuis Dormans : décapage laser à ${city.label} et alentours.`;

      document.title = title;
      document.getElementById('meta-title').textContent = title;
      document.getElementById('meta-desc').setAttribute('content', desc);

      const canon = `https://www.renovlaser.fr/ville/${slug}`;
      document.getElementById('link-canonical').setAttribute('href', canon);

      document.getElementById('og-title').setAttribute('content', title);
      document.getElementById('og-desc').setAttribute('content', desc);

      // Mise à jour du contenu
      document.getElementById('h1').textContent = `Décapage laser à ${city.label}`;
      document.getElementById('intro').innerHTML = `Je couvre <strong>${city.label}</strong> et les communes proches.`;

      // Injection du contenu SEO spécifique à la ville
      if (city.seoIntro) {
        const seoIntroSection = document.getElementById('seo-intro');
        const seoTitle = document.getElementById('seo-title');
        const seoIntroText = document.getElementById('seo-intro-text');

        seoTitle.textContent = city.seoTitle || `Décapage laser à ${city.label}`;
        seoIntroText.textContent = city.seoIntro;
        seoIntroSection.style.display = 'block';
      }

      if (city.seoWhyChoose) {
        const seoWhyChooseSection = document.getElementById('seo-why-choose');
        const seoWhyChooseText = document.getElementById('seo-why-choose-text');

        seoWhyChooseText.textContent = city.seoWhyChoose;
        seoWhyChooseSection.style.display = 'block';
      }

      if (city.seoApplications) {
        const seoApplicationsSection = document.getElementById('seo-applications');
        const seoApplicationsText = document.getElementById('seo-applications-text');

        seoApplicationsText.textContent = city.seoApplications;
        seoApplicationsSection.style.display = 'block';
      }

      // Mise à jour des photos si disponibles
      if (city.photos && city.photos.length) {
        const wrap = document.getElementById('photos');
        wrap.innerHTML = '';
        city.photos.forEach(ph => {
          const d = document.createElement('div');
          d.className = 'ph';
          d.textContent = ph.label || 'Photo';
          wrap.appendChild(d);
        });
      }
    })
    .catch(() => {
      location.href = '/zones-intervention.html';
    });
})();
