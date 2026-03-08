/**
 * Floating Contacts Module
 * Affiche les contacts flottants après un scroll de 100px
 */
(function() {
  'use strict';

  const floatingContactsEl = document.getElementById('floatingContacts');
  let hasScrolled = false;

  window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 100) {
      floatingContactsEl.classList.add('show');
      floatingContactsEl.setAttribute('aria-hidden', 'false');
      hasScrolled = true;
    }
  });
})();
