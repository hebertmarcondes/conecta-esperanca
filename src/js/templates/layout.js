export function layoutTemplate(content) {
  return `
    <header class="site-header">
      <a class="brand" href="#/inicio" aria-label="Conecta Esperança - página inicial">
        <span>Conecta</span> Esperança
      </a>
      <button class="menu-toggle" type="button" aria-controls="menu-principal" aria-expanded="false">
        <span aria-hidden="true">☰</span><span>Menu</span>
      </button>
      <nav class="main-nav" id="menu-principal" aria-label="Navegação principal">
        <a data-route="inicio" href="#/inicio">Início</a>
        <a data-route="projetos" href="#/projetos">Projetos</a>
        <a data-route="cadastro" href="#/cadastro">Faça parte</a>
        <a href="#contato">Contato</a>
      </nav>
      <button class="contrast-toggle" type="button" aria-pressed="false" title="Alternar alto contraste">
        <span aria-hidden="true">◐</span><span class="contrast-label">Alto contraste</span>
      </button>
    </header>
    <main id="conteudo" tabindex="-1">${content}</main>
    <footer class="site-footer" id="contato">
      <div class="container footer-grid">
        <div>
          <h2>Conecta Esperança</h2>
          <p>Conectando pessoas, transformando realidades.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="#/inicio">Início</a>
          <a href="#/projetos">Projetos</a>
          <a href="#/cadastro">Faça parte</a>
        </div>
        <div>
          <h3>Contato</h3>
          <a href="mailto:contato@conectaesperanca.org">contato@conectaesperanca.org</a>
          <a href="tel:+5515974028525">(15) 97402-8525</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Conteúdo desenvolvido por <a href="mailto:hebert.marcondes@hotmail.com">Hebert Marcondes</a>.</p>
        <p>&copy; 2026 Conecta Esperança. Todos os direitos reservados.</p>
      </div>
    </footer>`;
}
