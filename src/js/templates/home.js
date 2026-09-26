export function homeTemplate() {
  return `
    <section class="hero" aria-labelledby="titulo-inicio">
      <div class="container hero-content">
        <p class="eyebrow">Conectando pessoas, transformando realidades</p>
        <h1 id="titulo-inicio">Pequenas atitudes podem <span>transformar grandes histórias</span></h1>
        <p>A Conecta Esperança promove oportunidades e melhora a qualidade de vida de pessoas em situação de vulnerabilidade social.</p>
        <div class="actions">
          <a class="button" href="#/projetos">Conheça nossos projetos</a>
          <a class="button button-outline" href="#/cadastro">Faça parte</a>
        </div>
      </div>
    </section>
    <section class="section section-light" aria-labelledby="quem-somos">
      <div class="container text-column">
        <p class="eyebrow">Quem somos</p>
        <h2 id="quem-somos">Juntos podemos construir um futuro melhor</h2>
        <p>A Conecta Esperança nasceu da união de pessoas que acreditam que educação, tecnologia e oportunidades podem transformar comunidades.</p>
        <p>Nosso trabalho reúne projetos sociais, campanhas de arrecadação, ações voluntárias e parcerias com empresas e instituições.</p>
      </div>
    </section>
    <section class="section" aria-labelledby="atuacao">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Nossa atuação</p>
          <h2 id="atuacao">Onde concentramos nossos esforços</h2>
        </div>
        <div class="pillars">
          <article><span class="pillar-icon" aria-hidden="true">01</span><h3>Educação</h3><p>Acesso ao conhecimento e desenvolvimento pessoal e profissional.</p></article>
          <article><span class="pillar-icon" aria-hidden="true">02</span><h3>Inclusão</h3><p>Oportunidades e participação social para pessoas em vulnerabilidade.</p></article>
          <article><span class="pillar-icon" aria-hidden="true">03</span><h3>Tecnologia</h3><p>Ferramentas digitais usadas para aprendizado, autonomia e transformação.</p></article>
        </div>
      </div>
    </section>
    <section class="numbers" aria-label="Resultados da organização">
      <div class="container stats">
        <div><strong>+500</strong><span>Pessoas atendidas</span></div>
        <div><strong>+120</strong><span>Voluntários</span></div>
        <div><strong>15</strong><span>Ações realizadas</span></div>
        <div><strong>+30</strong><span>Parceiros</span></div>
      </div>
    </section>
    <section class="section callout">
      <div class="container text-column">
        <h2>Você também pode fazer a diferença</h2>
        <p>Seja como voluntário, parceiro ou apoiador. Sua participação ajuda nossos projetos a alcançar mais pessoas.</p>
        <a class="button" href="#/cadastro">Quero ser voluntário</a>
      </div>
    </section>`;
}
