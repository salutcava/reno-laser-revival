/**
 * Gallery Module
 * Gère la galerie avant/après (tabs + comparateur)
 */
(function() {
  'use strict';

  // Gestion des tabs (Deux photos / Comparateur)
  const tabTwo = document.getElementById('tab-two');
  const tabCompare = document.getElementById('tab-compare');
  const panelTwo = document.getElementById('panel-two');
  const panelCompare = document.getElementById('panel-compare');

  if (tabTwo && tabCompare && panelTwo && panelCompare) {
    function activate(tab) {
      const isTwo = (tab === 'two');
      tabTwo.setAttribute('aria-selected', String(isTwo));
      tabCompare.setAttribute('aria-selected', String(!isTwo));
      panelTwo.hidden = !isTwo;
      panelCompare.hidden = isTwo;
    }

    tabTwo.addEventListener('click', () => activate('two'));
    tabCompare.addEventListener('click', () => activate('compare'));
  }

  // Comparateur glissière (accessible & performant)
  const comps = document.querySelectorAll('.compare');
  comps.forEach(comp => {
    const after = comp.querySelector('.compare__after');
    const slider = comp.querySelector('.compare__slider');
    const divider = comp.querySelector('.compare__divider');
    const init = Number(comp.getAttribute('data-initial') || slider.value || 50);

    function setPosition(pct) {
      pct = Math.max(0, Math.min(100, pct));
      after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = pct + '%';
      slider.value = pct;
    }

    setPosition(init);

    slider.addEventListener('input', (e) => setPosition(e.target.value));

    // Drag sur toute la zone (desktop + mobile)
    function handlePoint(clientX) {
      const rect = comp.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setPosition(pct);
    }

    comp.addEventListener('pointerdown', (e) => {
      comp.setPointerCapture(e.pointerId);
      handlePoint(e.clientX);
    });

    comp.addEventListener('pointermove', (e) => {
      if (e.pressure > 0 || e.buttons) handlePoint(e.clientX);
    });
  });
})();
