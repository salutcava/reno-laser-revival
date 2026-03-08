/**
 * Carousel Module
 * Gère le carrousel d'avis clients
 */
(function() {
  'use strict';

  const avisWrapper = document.getElementById('avisWrapper');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicatorsContainer = document.getElementById('indicators');
  const avisCards = document.querySelectorAll('.avis-card');

  if (!avisWrapper || !prevBtn || !nextBtn || !indicatorsContainer) return;

  const cardWidth = 350 + 24; // largeur carte + gap
  let currentIndex = 0;
  const totalCards = avisCards.length;

  // Création des indicateurs
  for (let i = 0; i < totalCards; i++) {
    const indicator = document.createElement('button');
    indicator.classList.add('indicator');
    indicator.setAttribute('aria-label', `Aller à l'avis ${i + 1}`);
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => scrollToCard(i));
    indicatorsContainer.appendChild(indicator);
  }

  const indicators = document.querySelectorAll('.indicator');

  function updateCarousel() {
    const scrollAmount = currentIndex * cardWidth;
    avisWrapper.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    indicators.forEach((ind, idx) => {
      ind.classList.toggle('active', idx === currentIndex);
    });
  }

  function scrollToCard(index) {
    currentIndex = Math.max(0, Math.min(index, totalCards - 1));
    updateCarousel();
  }

  // Boutons précédent/suivant
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Synchronisation lors du scroll manuel
  let scrollTimeout;
  avisWrapper.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollPos = avisWrapper.scrollLeft;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        indicators.forEach((ind, idx) => {
          ind.classList.toggle('active', idx === currentIndex);
        });
      }
    }, 150);
  });

  // Navigation au clavier
  avisWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    else if (e.key === 'ArrowRight') nextBtn.click();
  });
})();
