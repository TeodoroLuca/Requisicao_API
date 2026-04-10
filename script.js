document.addEventListener("DOMContentLoaded", function () {

    // VALIDAÇÃO CAPTCHA (FRONT)
    document.getElementById('formValidade').addEventListener('submit', function(e) {
        e.preventDefault();

        const token = document.querySelector('[name="cf-turnstile-response"]')?.value;
        const erro = document.getElementById('mensagemErro');

        if (!token) {
            erro.style.display = 'block';
            return;
        }

        erro.style.display = 'none';

        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'block';
    });

    // BUSCAR CEP
    document.getElementById('btnBuscar').addEventListener('click', async function() {
        const cep = document.getElementById('cep').value.replace(/\D/g, '');
        const numero = document.getElementById('numero').value;
        const resultado = document.getElementById('resultado');

        resultado.innerHTML = "";

        if (cep.length !== 8) {
            resultado.innerHTML = "<p style='color:#ff4d4d'>CEP inválido!</p>";
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                resultado.innerHTML = "<p style='color:#ff4d4d'>CEP não encontrado.</p>";
                return;
            }

            resultado.innerHTML = `
                <div class="resultado-box">
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Número:</strong> ${numero || 'S/N'}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;

        } catch {
            resultado.innerHTML = "<p style='color:#ff4d4d'>Erro ao buscar CEP.</p>";
        }
    });

    // LIMPAR
    document.getElementById('btnLimpar').addEventListener('click', function() {
        document.getElementById('cep').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('resultado').innerHTML = '';
    });

    // VOLTAR
    document.getElementById('btnVoltar').addEventListener('click', function() {
        location.reload();
    });

});