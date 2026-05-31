(function () {
  const root = document.querySelector('.hikma-landing');
  if (!root) return;

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
