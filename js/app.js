const projects = [
  ['Educação', 'educacao', 'Conecta Saber', 'projeto-educacao.png', 'Voluntários auxiliando crianças em uma atividade educacional', 'Atividades gratuitas de reforço escolar, leitura e informática básica.', 'Ampliar o acesso à educação e criar novas oportunidades.'],
  ['Tecnologia', 'tecnologia', 'Inclusão Digital', 'projeto-informatica.png', 'Pessoas em uma oficina de informática', 'Oficinas de informática, navegação segura e ferramentas digitais.', 'Reduzir a desigualdade digital e proporcionar autonomia.'],
  ['Assistência social', 'social', 'Mesa Solidária', 'projeto-alimentos.png', 'Voluntários organizando alimentos para doação', 'Arrecadação e distribuição de alimentos para famílias vulneráveis.', 'Contribuir para a segurança alimentar das famílias.'],
  ['Meio ambiente', 'ambiente', 'Comunidade Sustentável', 'projeto-preservacao-ambiental.png', 'Ação de preservação ambiental', 'Conscientização ambiental, coleta seletiva e reaproveitamento.', 'Incentivar hábitos sustentáveis na comunidade.'],
  ['Voluntariado', 'voluntariado', 'Rede de Voluntários', 'projeto-voluntarios.png', 'Grupo de voluntários em uma ação social', 'Conecta pessoas que desejam contribuir com tempo e conhecimento.', 'Ampliar o alcance das ações sociais.'],
  ['Capacitação', 'capacitacao', 'Caminhos para o Futuro', 'projeto-capacitacao-profissional.png', 'Jovens em capacitação profissional', 'Oficinas sobre currículo, entrevistas e ferramentas digitais.', 'Preparar jovens para o mercado de trabalho.']
];

const templates = {
  inicio: () => `
    <section class="hero"><div class="container hero-content">
      <p class="eyebrow">Conectando pessoas, transformando realidades</p>
      <h1>Pequenas atitudes podem <span>transformar grandes histórias</span></h1>
      <p>A Conecta Esperança promove oportunidades e melhora a qualidade de vida de pessoas em situação de vulnerabilidade social.</p>
      <div class="actions"><a class="button" href="#/projetos">Conheça nossos projetos</a><a class="button button-outline" href="#/cadastro">Faça parte</a></div>
    </div></section>
    <section class="section section-light"><div class="container text-column"><p class="eyebrow">Quem somos</p><h2>Juntos podemos construir um futuro melhor</h2><p>A Conecta Esperança nasceu da união de pessoas que acreditam que educação, tecnologia e oportunidades podem transformar comunidades.</p><p>Nosso trabalho reúne projetos sociais, campanhas de arrecadação, ações voluntárias e parcerias.</p></div></section>
    <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">Nossa atuação</p><h2>Onde concentramos nossos esforços</h2></div><div class="pillars"><article><h3>Educação</h3><p>Acesso ao conhecimento e desenvolvimento.</p></article><article><h3>Inclusão</h3><p>Oportunidades e participação social.</p></article><article><h3>Tecnologia</h3><p>Ferramentas digitais para autonomia.</p></article></div></div></section>
    <section class="numbers"><div class="container stats"><div><strong>+500</strong><span>Pessoas atendidas</span></div><div><strong>+120</strong><span>Voluntários</span></div><div><strong>15</strong><span>Ações realizadas</span></div><div><strong>+30</strong><span>Parceiros</span></div></div></section>`,
  projetos: () => `
    <section class="page-hero"><div class="container text-column"><p class="eyebrow">Nossas iniciativas</p><h1>Projetos que transformam comunidades</h1><p>Educação, inclusão, solidariedade e sustentabilidade construídas em conjunto.</p></div></section>
    <section class="section"><div class="container"><div class="section-heading"><h2>Conheça nossos projetos</h2></div><div class="projects-grid">${projects.map(([category, badge, name, image, alt, description, objective]) => `<article class="project-card"><img src="image/${image}" alt="${alt}" width="512" height="512" loading="lazy"><div class="project-content"><span class="badge badge-${badge}">${category}</span><h2>${name}</h2><p>${description}</p><h3>Objetivo</h3><p>${objective}</p></div></article>`).join('')}</div></div></section>`,
  cadastro: () => `
    <section class="page-hero"><div class="container text-column"><p class="eyebrow">Faça parte</p><h1>Seu tempo pode transformar uma história</h1><p>Preencha seus dados para participar das ações.</p></div></section>
    <section class="section form-section"><div class="container form-container"><form id="registration-form"><div class="form-status" role="alert" hidden></div><fieldset><legend>Dados pessoais</legend><div class="form-grid"><div class="field field-full"><label for="nome">Nome completo *</label><input id="nome" name="nome" required></div><div class="field"><label for="cpf">CPF *</label><input id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required></div><div class="field"><label for="email">E-mail *</label><input id="email" name="email" type="email" required></div><div class="field"><label for="telefone">Telefone *</label><input id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" required></div><div class="field"><label for="cep">CEP *</label><input id="cep" name="cep" pattern="\\d{5}-\\d{3}" required></div><div class="field"><label for="projeto">Projeto *</label><select id="projeto" name="projeto" required><option value="">Selecione</option>${projects.map((item) => `<option>${item[2]}</option>`).join('')}</select></div><div class="field field-full"><label for="mensagem">Como gostaria de ajudar?</label><textarea id="mensagem" name="mensagem"></textarea></div></div></fieldset><div class="terms"><input id="termos" type="checkbox" required><label for="termos">Autorizo o contato da Conecta Esperança. *</label></div><button class="button" type="submit">Enviar cadastro</button></form></div></section>`
};

function currentRoute() {
  const route = location.hash.replace('#/', '').split('/')[0];
  return templates[route] ? route : 'inicio';
}

function bindPageEvents() {
  const form = document.querySelector('#registration-form');
  if (!form) return;

  const formatters = {
    cpf: (value) => value.replace(/\D/g, '').slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
    telefone: (value) => value.replace(/\D/g, '').slice(0, 11).replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2'),
    cep: (value) => value.replace(/\D/g, '').slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2')
  };

  Object.entries(formatters).forEach(([id, formatter]) => form.elements[id].addEventListener('input', (event) => event.target.value = formatter(event.target.value)));
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');

    if (!form.checkValidity()) {
      status.hidden = false;
      status.className = 'form-status error';
      status.textContent = 'Revise os campos obrigatórios antes de continuar.';
      form.querySelector(':invalid')?.focus();
      return;
    }

    const registrations = JSON.parse(localStorage.getItem('conectaEsperancaCadastros') || '[]');
    registrations.push({ ...Object.fromEntries(new FormData(form)), cadastradoEm: new Date().toISOString() });
    localStorage.setItem('conectaEsperancaCadastros', JSON.stringify(registrations));
    form.reset();
    status.hidden = true;

    await Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado',
      text: 'Obrigado por querer fazer parte da Conecta Esperança.',
      confirmButtonText: 'Entendi',
      confirmButtonColor: '#176b4d'
    });
  });
}

function render() {
  const route = currentRoute();
  document.querySelector('#page').innerHTML = templates[route]();
  document.querySelectorAll('[data-route]').forEach((link) => link.classList.toggle('active', link.dataset.route === route));
  document.title = `Conecta Esperança | ${route === 'inicio' ? 'Início' : route[0].toUpperCase() + route.slice(1)}`;
  bindPageEvents();
  window.scrollTo(0, 0);
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const contrastButton = document.querySelector('.contrast-toggle');

const savedContrast = localStorage.getItem('conectaEsperancaAltoContraste') === 'true';
document.body.classList.toggle('high-contrast', savedContrast);
contrastButton.setAttribute('aria-pressed', String(savedContrast));

contrastButton.addEventListener('click', () => {
  const enabled = !document.body.classList.contains('high-contrast');
  document.body.classList.toggle('high-contrast', enabled);
  contrastButton.setAttribute('aria-pressed', String(enabled));
  localStorage.setItem('conectaEsperancaAltoContraste', String(enabled));
});
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});
window.addEventListener('hashchange', render);
if (!location.hash) history.replaceState(null, '', '#/inicio');
render();
