document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // ESTADO GLOBAL
    // ================================
    let turnstileToken = null;

    // ================================
    // RENDERIZA O CAPTCHA (FORÇADO)
    // ================================
    turnstile.render('#turnstile-container', {
        sitekey: '0x4AAAAAAC3Y2IQ1RTJpOBUp',
        theme: 'light',
        size: 'normal',
        callback: function (token) {
            turnstileToken = token;
        }
    });

    // ================================
    // MIDDLEWARE
    // ================================
    function validarRequisicao(cep) {

        if (!turnstileToken) {
            throw new Error("Valide o CAPTCHA antes de continuar.");
        }

        if (!cep || cep.length !== 8) {
            throw new Error("CEP inválido. Digite 8 números.");
        }
    }

    // ================================
    // VALIDAÇÃO DE ENTRADA
    // ================================
    document.getElementById('formValidade').addEventListener('submit', function (e) {
        e.preventDefault();

        const erro = document.getElementById('mensagemErro');

        if (!turnstileToken) {
            erro.style.display = 'block';
            return;
        }

        erro.style.display = 'none';

        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'block';
    });

    // ================================
    // BUSCAR CEP
    // ================================
    document.getElementById('btnBuscar').addEventListener('click', async function () {

        const cep = document.getElementById('cep').value.replace(/\D/g, '');
        const numero = document.getElementById('numero').value;
        const resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML = "";

        try {
            validarRequisicao(cep);

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                throw new Error("CEP não encontrado.");
            }

            resultadoDiv.innerHTML = `
                <div style="margin-top:20px; padding:15px; background:rgba(255,255,255,0.1); border-radius:10px;">
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Número:</strong> ${numero || 'S/N'}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;

        } catch (error) {
            resultadoDiv.innerHTML = `<p style="color:#ff4d4d">${error.message}</p>`;
        }
    });

    // ================================
    // LIMPAR
    // ================================
    document.getElementById('btnLimpar').addEventListener('click', function () {
        document.getElementById('cep').value = "";
        document.getElementById('numero').value = "";
        document.getElementById('resultado').innerHTML = "";
    });

    // ================================
    // SAIR
    // ================================
    document.getElementById('btnVoltar').addEventListener('click', function () {
        location.reload();
    });

});