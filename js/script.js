document.addEventListener('DOMContentLoaded', () => {
    const masks = {
        cpf(value) {
            return value.replace(/\D/g, '').slice(0, 11)
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        },
        telefone(value) {
            return value.replace(/\D/g, '').slice(0, 11)
                .replace(/^(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
        },
        cep(value) {
            return value.replace(/\D/g, '').slice(0, 8)
                .replace(/(\d{5})(\d)/, '$1-$2');
        }
    };

    Object.entries(masks).forEach(([id, formatter]) => {
        const field = document.getElementById(id);
        field?.addEventListener('input', () => {
            field.value = formatter(field.value);
        });
    });

    const form = document.getElementById('formCadastro');
    const alert = document.getElementById('alertaFormulario');

    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert.className = 'alerta erro';
            alert.textContent = 'Verifique os campos obrigatórios antes de continuar.';
            form.reportValidity();
            return;
        }

        alert.className = 'alerta sucesso';
        alert.textContent = 'Cadastro preenchido corretamente.';
        form.reset();
    });
});
