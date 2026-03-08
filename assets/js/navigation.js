/**
 * Navigation Module
 * Gère le menu mobile (drawer) et ses interactions
 */
(function() {
  'use strict';

  const htmlEl = document.documentElement;
  const navToggleBtn = document.querySelector('.nav-toggle');
  const navDrawerEl = document.getElementById('mobileMenu');
  const navBackdropEl = document.getElementById('navBackdrop');
  const drawerCloseBtn = document.getElementById('drawerClose');
  const drawerLinksEls = document.querySelectorAll('.drawer-list a');

  function openNav() {
    htmlEl.classList.add('nav-open');
    navToggleBtn.setAttribute('aria-expanded', 'true');
    navDrawerEl.setAttribute('aria-hidden', 'false');
    navBackdropEl.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    htmlEl.classList.remove('nav-open');
    navToggleBtn.setAttribute('aria-expanded', 'false');
    navDrawerEl.setAttribute('aria-hidden', 'true');
    navBackdropEl.hidden = true;
    document.body.style.overflow = '';
  }

  // Event listeners
  if (navToggleBtn) navToggleBtn.addEventListener('click', openNav);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeNav);
  if (navBackdropEl) navBackdropEl.addEventListener('click', closeNav);
  drawerLinksEls.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Fermeture avec Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && htmlEl.classList.contains('nav-open')) {
      closeNav();
    }
  });
})();
