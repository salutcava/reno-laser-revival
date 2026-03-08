/**
 * Simulator Module
 * Gère les simulateurs de tarif (supporte plusieurs instances)
 */
(function() {
  'use strict';

  const PRICES = {
    volet: 40,
    porte: 80,
    portail: 150,
    jante: 50,
    pierre: 20,
    agri: 80
  };

  // Fonction pour initialiser un simulateur
  function initSimulator(formId, resultId, typeId, qtyId, degId, qtyLabelId) {
    const simForm = document.getElementById(formId);
    const simResult = document.getElementById(resultId);
    const typeSelect = document.getElementById(typeId);
    const qtyInput = document.getElementById(qtyId);
    const qtyLabel = document.getElementById(qtyLabelId);

    if (!simForm) return;

    function updateQtyLabel() {
      const type = typeSelect.value;
      if (type === 'pierre') {
        qtyLabel.innerHTML = '<span class="label-icon">📊</span><span>Surface (m²)</span>';
      } else if (type === 'agri') {
        qtyLabel.innerHTML = '<span class="label-icon">📊</span><span>Durée (heures)</span>';
      } else {
        qtyLabel.innerHTML = '<span class="label-icon">📊</span><span>Quantité</span>';
      }
    }

    typeSelect.addEventListener('change', updateQtyLabel);
    updateQtyLabel();

    simForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const type = typeSelect.value;
      const qty = Math.max(1, parseFloat(qtyInput.value || '1'));
      const coef = parseFloat(document.getElementById(degId).value || '1');

      if (!type) {
        simResult.textContent = "Veuillez sélectionner un type d'intervention";
        simResult.style.color = 'var(--error)';
        return;
      }

      let base = 0;
      if (type === 'pierre') {
        base = PRICES.pierre * qty;
      } else if (type === 'agri') {
        base = PRICES.agri * qty;
      } else {
        base = (PRICES[type] || 0) * qty;
      }

      const total = Math.round(base * coef);
      simResult.textContent = total ? `Estimation : environ ${total} € TTC` : 'Calcul impossible';
    });
  }

  // Initialiser le premier simulateur
  initSimulator('sim-form', 'sim-result', 'sim-type', 'sim-qty', 'sim-deg', 'sim-qty-label');

  // Initialiser le deuxième simulateur
  initSimulator('sim-form-2', 'sim-result-2', 'sim-type-2', 'sim-qty-2', 'sim-deg-2', 'sim-qty-label-2');
})();
