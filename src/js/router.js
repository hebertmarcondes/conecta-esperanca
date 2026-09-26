import { homeTemplate } from './templates/home.js';
import { projectsTemplate } from './templates/projects.js';
import { registrationTemplate } from './templates/registration.js';

const routes = {
  inicio: { title: 'Início', template: homeTemplate },
  projetos: { title: 'Projetos', template: projectsTemplate },
  cadastro: { title: 'Faça parte', template: registrationTemplate }
};

export function getCurrentRoute() {
  const route = location.hash.replace('#/', '').split('/')[0];
  return routes[route] ? route : 'inicio';
}

export function renderRoute(container) {
  const routeName = getCurrentRoute();
  const route = routes[routeName];
  container.innerHTML = route.template();
  document.title = `Conecta Esperança | ${route.title}`;
  return routeName;
}
