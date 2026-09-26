const onlyDigits = (value, limit) => value.replace(/\D/g, '').slice(0, limit);

export function maskCpf(value) {
  return onlyDigits(value, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function maskPhone(value) {
  const digits = onlyDigits(value, 11);
  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(digits.length > 10 ? /(\d{5})(\d{1,4})$/ : /(\d{4})(\d{1,4})$/, '$1-$2');
}

export function maskCep(value) {
  return onlyDigits(value, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

export function bindMasks(form) {
  const masks = { cpf: maskCpf, telefone: maskPhone, cep: maskCep };
  Object.entries(masks).forEach(([id, formatter]) => {
    form.elements[id]?.addEventListener('input', (event) => {
      event.target.value = formatter(event.target.value);
    });
  });
}
