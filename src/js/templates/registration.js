import { projects } from '../data/projects.js';

const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

export function registrationTemplate() {
  return `
    <section class="page-hero">
      <div class="container text-column">
        <p class="eyebrow">Faça parte</p>
        <h1>Seu tempo pode transformar uma história</h1>
        <p>Preencha seus dados para participar das ações da Conecta Esperança.</p>
      </div>
    </section>
    <section class="section form-section">
      <div class="container form-container">
        <form id="registration-form" novalidate>
          <div class="form-status" role="alert" aria-live="assertive" hidden></div>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div class="form-grid">
              <div class="field field-full"><label for="nome">Nome completo *</label><input id="nome" name="nome" type="text" autocomplete="name" minlength="3" required></div>
              <div class="field"><label for="cpf">CPF *</label><input id="cpf" name="cpf" type="text" inputmode="numeric" autocomplete="off" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required></div>
              <div class="field"><label for="nascimento">Data de nascimento *</label><input id="nascimento" name="nascimento" type="date" required></div>
              <div class="field"><label for="email">E-mail *</label><input id="email" name="email" type="email" autocomplete="email" required></div>
              <div class="field"><label for="telefone">Telefone *</label><input id="telefone" name="telefone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(00) 00000-0000" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" required></div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Endereço</legend>
            <div class="form-grid">
              <div class="field"><label for="cep">CEP *</label><input id="cep" name="cep" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" pattern="\\d{5}-\\d{3}" required></div>
              <div class="field"><label for="estado">Estado *</label><select id="estado" name="estado" autocomplete="address-level1" required><option value="">Selecione</option>${states.map((state) => `<option value="${state}">${state}</option>`).join('')}</select></div>
              <div class="field"><label for="cidade">Cidade *</label><input id="cidade" name="cidade" type="text" autocomplete="address-level2" required></div>
              <div class="field"><label for="bairro">Bairro *</label><input id="bairro" name="bairro" type="text" autocomplete="address-level3" required></div>
              <div class="field field-full"><label for="endereco">Endereço *</label><input id="endereco" name="endereco" type="text" autocomplete="street-address" required></div>
              <div class="field"><label for="numero">Número *</label><input id="numero" name="numero" type="text" inputmode="numeric" required></div>
              <div class="field"><label for="complemento">Complemento</label><input id="complemento" name="complemento" type="text"></div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Interesse em voluntariado</legend>
            <div class="form-grid">
              <div class="field"><label for="projeto">Projeto *</label><select id="projeto" name="projeto" required><option value="">Selecione um projeto</option>${projects.map((project) => `<option value="${project.name}">${project.name}</option>`).join('')}</select></div>
              <div class="field"><label for="disponibilidade">Disponibilidade *</label><select id="disponibilidade" name="disponibilidade" required><option value="">Selecione</option><option>Durante a semana</option><option>Finais de semana</option><option>Durante a semana e finais de semana</option></select></div>
              <div class="field field-full"><label for="mensagem">Como você gostaria de ajudar?</label><textarea id="mensagem" name="mensagem" rows="5" maxlength="500"></textarea></div>
            </div>
          </fieldset>
          <div class="terms"><input id="termos" name="termos" type="checkbox" required><label for="termos">Declaro que as informações são verdadeiras e autorizo o contato da Conecta Esperança. *</label></div>
          <button class="button submit-button" type="submit">Enviar cadastro</button>
        </form>
      </div>
    </section>`;
}
