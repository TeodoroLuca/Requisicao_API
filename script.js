document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // ESTADO GLOBAL
    // ================================
    let captchaValido = false;
    let turnstileToken = null;

    const form = document.getElementById('formValidade');
    const mensagemErro = document.getElementById('mensagemErro');
    const paginaValidade = document.getElementById('paginaValidade');
    const buscador = document.getElementById('buscador');

    const btnBuscar = document.getElementById('btnBuscar');
    const btnLimpar = document.getElementById('btnLimpar');
    const btnVoltar = document.getElementById('btnVoltar');

    const cepInput = document.getElementById('cep');
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');

    // ================================
    // CALLBACK DO TURNSTILE
    // ================================
    window.onTurnstileSuccess = function (token) {
        turnstileToken = token;
        captchaValido = true;

        if (mensagemErro) mensagemErro.style.display = 'none';
    };

    // ================================
    // MIDDLEWARE
    // ================================
    function validarRequisicao(cep) {
        if (!captchaValido || !turnstileToken) {
            throw new Error("Valide o CAPTCHA antes de continuar.");
        }

        if (!cep || cep.length !== 8) {
            throw new Error("CEP inválido. Digite 8 números.");
        }
    }

    // ================================
    // 1. VALIDAÇÃO / ENTRADA
    // ================================
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!turnstileToken) {
                mensagemErro.style.display = 'block';
                return;
            }

            mensagemErro.style.display = 'none';

            paginaValidade.style.display = 'none';
            buscador.style.display = 'flex';
        });
    }

    // ================================
    // 2. BUSCADOR CEP
    // ================================
    if (btnBuscar) {
        btnBuscar.addEventListener('click', async function() {

            const cep = cepInput.value.replace(/\D/g, '');
            const numero = numeroInput.value;

            resultadoDiv.innerHTML = "";

            try {
                validarRequisicao(cep);

                btnBuscar.disabled = true;
                btnBuscar.textContent = "Buscando...";

                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

                if (!response.ok) {
                    throw new Error("Erro na conexão com o servidor.");
                }

                const data = await response.json();

                if (data.erro) {
                    throw new Error("CEP não encontrado.");
                }

                resultadoDiv.innerHTML = `
                    <div style="text-align:left; margin-top:20px; padding:15px; background:rgba(255,255,255,0.1); border-radius:10px;">
                        <p><strong>Logradouro:</strong> ${data.logradouro || '-'}</p>
                        <p><strong>Número:</strong> ${numero || 'S/N'}</p>
                        <p><strong>Bairro:</strong> ${data.bairro || '-'}</p>
                        <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                    </div>
                `;

            } catch (error) {
                resultadoDiv.innerHTML = `<p style='color:#ff4d4d'>${error.message}</p>`;
            } finally {
                btnBuscar.disabled = false;
                btnBuscar.textContent = "Buscar Endereço";
            }
        });
    }

    // ================================
    // 3. LIMPAR
    // ================================
    if (btnLimpar) {
        btnLimpar.addEventListener('click', function() {
            cepInput.value = "";
            numeroInput.value = "";
            resultadoDiv.innerHTML = "";
        });
    }

    // ================================
    // 4. VOLTAR
    // ================================
    if (btnVoltar) {
        btnVoltar.addEventListener('click', function() {
            location.reload();
        });
    }

});
