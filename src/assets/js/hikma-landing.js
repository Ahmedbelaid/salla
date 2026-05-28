/**
 * Hikma landing page — mobile nav & smooth anchor scroll
 */
(function () {
  const root = document.querySelector('.hikma-landing');
  if (!root) return;

  const toggle = root.querySelector('[data-hikma-nav-toggle]');
  const mobileNav = root.querySelector('[data-hikma-mobile-nav]');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('is-open');
    });

    mobileNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
    });
  }

  root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = root.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const form = root.querySelector('[data-hikma-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
})();
