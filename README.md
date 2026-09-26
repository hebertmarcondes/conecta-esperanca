# Conecta Esperança

Aplicação web de uma organização social fictícia dedicada a educação, inclusão, tecnologia e voluntariado. O projeto foi desenvolvido como uma SPA (Single Page Application) em JavaScript e utiliza Vite para desenvolvimento e build de produção.

## Funcionalidades

- navegação entre Início, Projetos e Faça parte sem recarregar a página;
- projetos criados dinamicamente a partir de dados JavaScript;
- formulário responsivo com validação e máscaras de CPF, telefone e CEP;
- armazenamento local dos cadastros;
- confirmação de envio com SweetAlert2;
- menu adaptado para celulares e tablets;
- modo de alto contraste com preferência persistente;
- navegação por teclado, link para pular conteúdo e atributos ARIA;
- imagens WebP com carregamento tardio na página de projetos.

## Tecnologias e ferramentas

- HTML5 semântico;
- CSS3, Grid Layout, Flexbox e media queries;
- JavaScript e ES6 Modules;
- localStorage;
- SweetAlert2;
- Vite;
- Git, GitHub e Sublime Text.

## Pré-requisitos

- Node.js 20 ou superior;
- npm;
- navegador moderno.

## Instalação e execução

```bash
git clone https://github.com/hebertmarcondes/conecta-esperanca.git
cd conecta-esperanca
npm install
npm run dev
```

O terminal mostrará o endereço local da aplicação.

## Build de produção

```bash
npm run build
npm run preview
```

O Vite gera os arquivos minificados na pasta `dist`.

## Estrutura do projeto

```text
conecta-esperanca/
|-- public/images/       # imagens WebP
|-- src/
|   |-- js/
|   |   |-- data/       # dados dos projetos
|   |   |-- services/   # acesso ao localStorage
|   |   |-- templates/  # conteúdo das telas
|   |   |-- utils/      # máscaras do formulário
|   |   |-- main.js     # eventos e inicialização
|   |   `-- router.js   # controle das rotas
|   `-- styles/         # Design System e responsividade
|-- index.html
`-- package.json
```

## Testes e validação

Foram verificados a navegação SPA, o menu responsivo, as máscaras, a validação do formulário, a persistência, o alto contraste e o carregamento das imagens. A versão de produção é validada com `npm run build`. O Console, o Network e as ferramentas responsivas do navegador auxiliam a inspeção manual.

## Versionamento

O desenvolvimento segue um fluxo baseado em GitFlow:

- `main`: versões estáveis;
- `develop`: integração das funcionalidades;
- `feature/*`: desenvolvimento isolado;
- `hotfix/*`: correções urgentes de produção.

Os commits seguem Conventional Commits e as releases utilizam Versionamento Semântico:

- `v1.0.0`: interface funcional e responsiva;
- `v1.1.0`: SPA e templates dinâmicos;
- `v1.2.0`: formulário, localStorage e feedback visual;
- `v1.2.1`: correções de eventos e navegação;
- `v1.3.0`: ES6 Modules, Vite, acessibilidade e otimizações.

## Deploy

O projeto está preparado para integração com a Vercel usando `npm run build` e o diretório de saída `dist`. A branch de produção é a `main`.

## Privacidade

Este é um projeto acadêmico. Os dados preenchidos não são enviados para um servidor e permanecem somente no `localStorage` do navegador usado no teste.

## Autor

Hebert Marcondes
