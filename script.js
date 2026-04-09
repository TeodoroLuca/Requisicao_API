document.getElementById('formValidade').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega o token gerado pelo CAPTCHA
    const captchaResponse = document.querySelector('[name="cf-turnstile-response"]').value;

    if (!captchaResponse) {
        // Se não houver token, exibe erro
        document.getElementById('mensagemErro').style.display = 'block';
    } else {
        // Se estiver validado, esconde a tela de validação e mostra o buscador
        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'block';
    }
});

// Botão Voltar
document.getElementById('btnVoltar').addEventListener('click', function() {
    location.reload(); // Recarrega a página para resetar o estado e o CAPTCHA
});

// Lógica de Busca de CEP (Exemplo funcional)
document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const resultadoDiv = document.getElementById('resultado');

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color:red'>CEP Inválido</p>";
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            resultadoDiv.innerHTML = "<p style='color:red'>CEP não encontrado.</p>";
        } else {
            resultadoDiv.innerHTML = `
                <div style="text-align: left; margin-top: 20px; border: 1px solid #ccc; padding: 10px;">
                    <p><strong>Rua:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;
        }
    } catch (error) {
        resultadoDiv.innerHTML = "<p style='color:red'>Erro ao buscar CEP.</p>";
    }
});
