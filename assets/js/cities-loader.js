/**
 * Cities Loader Module
 * Charge et affiche dynamiquement la liste des villes
 */
(async function() {
  'use strict';

  // Villes de l'Aisne
  const AISNE_02 = new Set([
    "chateau-thierry", "fere-en-tardenois", "crezancy", "mezy-moulins",
    "conde-en-brie", "nesles-la-montagne", "brasles", "etampes-sur-marne",
    "essomes-sur-marne", "chierry", "nogent-l-artaud", "charly-sur-marne",
    "pavant", "saulchery", "nogentel", "gland", "neuilly-saint-front",
    "bezu-saint-germain", "trelou-sur-marne"
  ]);

  // Fonction pour déterminer le département
  const deptLabelFor = (slug) =>
    AISNE_02.has(slug) ? "02 – Aisne" : "51 – Marne";

  try {
    // Chargement du JSON
    const response = await fetch('/data/cities.json');
    const cities = await response.json();

    // Tri alphabétique par label
    const sorted = Object.entries(cities)
      .map(([slug, obj]) => ({ slug, label: obj.label }))
      .sort((a, b) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' }));

    // Sélecteur du conteneur
    const list = document.getElementById('zonesList');
    if (!list) return;

    list.innerHTML = '';

    // Génération dynamique des cartes
    for (const { slug, label } of sorted) {
      const card = document.createElement('div');
      card.className = 'zone-card';
      card.innerHTML = `
        <a href="/decapage-laser/${slug}">${label}</a>
        <p>${deptLabelFor(slug)}</p>
      `;
      list.appendChild(card);
    }
  } catch (error) {
    console.error('Erreur lors du chargement des villes:', error);
  }
})();
