/* NeuNuc — Site JS (zero dependencies) */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',
        links.classList.contains('open'));
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Simple form handling (contact page)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sent \u2014 we\'ll be in touch.';
      btn.disabled = true;
      btn.classList.add('btn--sent');
      // Replace with actual form endpoint (Formspree, Netlify Forms, etc.)
    });
  }
});
