import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../styles/main.css';
import { layoutTemplate } from './templates/layout.js';
import { getCurrentRoute, renderRoute } from './router.js';
import { bindMasks } from './utils/masks.js';
import { getContrastPreference, saveContrastPreference, saveRegistration } from './services/storage.js';

const app = document.querySelector('#app');

function setActiveNavigation(routeName) {
  document.querySelectorAll('[data-route]').forEach((link) => {
    const active = link.dataset.route === routeName;
    link.classList.toggle('active', active);
    active ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
  });
}

function bindRegistration() {
  const form = document.querySelector('#registration-form');
  if (!form) return;

  bindMasks(form);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');

    if (!form.checkValidity()) {
      status.hidden = false;
      status.className = 'form-status error';
      status.textContent = 'Revise os campos obrigatórios destacados antes de continuar.';
      form.querySelector(':invalid')?.focus();
      form.classList.add('show-validation');
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    saveRegistration({ ...data, cadastradoEm: new Date().toISOString() });
    form.reset();
    form.classList.remove('show-validation');
    status.hidden = true;

    await Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado',
      text: 'Obrigado por querer fazer parte da Conecta Esperança. Entraremos em contato.',
      confirmButtonText: 'Entendi',
      confirmButtonColor: '#176b4d'
    });
  });
}

function bindShell() {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const contrastButton = document.querySelector('.contrast-toggle');
  const skipLink = document.querySelector('.skip-link');

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  nav.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });

  document.querySelectorAll('a[href="#contato"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#contato').scrollIntoView();
    });
  });

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#conteudo').focus();
  });

  contrastButton.addEventListener('click', () => {
    const enabled = !document.body.classList.contains('high-contrast');
    document.body.classList.toggle('high-contrast', enabled);
    contrastButton.setAttribute('aria-pressed', String(enabled));
    saveContrastPreference(enabled);
  });
}

function showPage({ moveFocus = false } = {}) {
  const page = document.querySelector('#page');
  const routeName = renderRoute(page);
  setActiveNavigation(routeName);
  bindRegistration();
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (moveFocus) document.querySelector('#conteudo').focus();
}

app.innerHTML = layoutTemplate('<div id="page"></div>');
document.body.classList.toggle('high-contrast', getContrastPreference());
document.querySelector('.contrast-toggle').setAttribute('aria-pressed', String(getContrastPreference()));
bindShell();
showPage();

window.addEventListener('hashchange', () => showPage({ moveFocus: true }));
if (!location.hash) history.replaceState(null, '', '#/inicio');

window.addEventListener('popstate', () => setActiveNavigation(getCurrentRoute()));
