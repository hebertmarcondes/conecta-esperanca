import { projects } from '../data/projects.js';

const projectCard = (project) => `
  <article class="project-card">
    <img src="${project.image}" alt="${project.alt}" width="512" height="512" loading="lazy" decoding="async">
    <div class="project-content">
      <span class="badge badge-${project.badge}">${project.category}</span>
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <h3>Objetivo</h3>
      <p>${project.objective}</p>
    </div>
  </article>`;

export function projectsTemplate() {
  return `
    <section class="page-hero">
      <div class="container text-column">
        <p class="eyebrow">Nossas iniciativas</p>
        <h1>Projetos que transformam comunidades</h1>
        <p>Educação, inclusão, solidariedade e sustentabilidade construídas com voluntários, parceiros e moradores.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="lista-projetos">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Fazendo a diferença</p>
          <h2 id="lista-projetos">Conheça nossos projetos</h2>
        </div>
        <div class="projects-grid">${projects.map(projectCard).join('')}</div>
      </div>
    </section>`;
}
