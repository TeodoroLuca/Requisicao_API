let captchaValidado = false;

// 🔐 CALLBACK DO TURNSTILE (OBRIGATÓRIO)
function onCaptchaSuccess(token) {
    captchaValidado = true;
}

document.addEventListener("DOMContentLoaded", function () {

    // 🔐 VALIDAÇÃO DO FORMULÁRIO
    document.getElementById('formValidade').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const erro = document.getElementById('mensagemErro');

        // CAPTCHA NÃO VALIDADO
        if (!captchaValidado) {
            erro.style.display = "block";
            erro.innerText = "⚠️ Resolva o CAPTCHA para continuar.";
            return;
        }

        // CAMPOS OBRIGATÓRIOS
        if (!nome || !email) {
            erro.style.display = "block";
            erro.innerText = "⚠️ Preencha todos os campos.";
            return;
        }

        erro.style.display = "none";

        // ✔️ LIBERA O BUSCADOR
        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'flex';
    });

    // 🔎 BUSCAR CEP
    document.getElementById('btnBuscar').addEventListener('click', async function () {

        const cep = document.getElementById('cep').value.replace(/\D/g, '');
        let numero = document.getElementById('numero').value.trim();
        const resultadoDiv = document.getElementById('resultado');

        // S/N AUTOMÁTICO
        if (numero === "") {
            numero = "S/N";
        }

        if (cep.length !== 8) {
            resultadoDiv.innerHTML =
                "<p style='color:#ff4d4d'>CEP inválido!</p>";
            return;
        }

        resultadoDiv.innerHTML = "<p>🔍 Buscando endereço...</p>";

        try {
            const response =
                await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            const data = await response.json();

            if (data.erro) {
                resultadoDiv.innerHTML =
                    "<p style='color:#ff4d4d'>CEP não encontrado.</p>";
                return;
            }

            resultadoDiv.innerHTML = `
                <div style="text-align:left; margin-top:20px; padding:15px;
                    background:rgba(255,255,255,0.1);
                    border-radius:10px;
                    border:1px solid rgba(255,255,255,0.2);">

                    <p><strong>Rua:</strong> ${data.logradouro}</p>
                    <p><strong>Número:</strong> ${numero}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;

        } catch (error) {
            resultadoDiv.innerHTML =
                "<p style='color:#ff4d4d'>Erro na consulta.</p>";
        }
    });

    // 🧹 LIMPAR
    document.getElementById('btnLimpar').addEventListener('click', function () {
        document.getElementById('cep').value = "";
        document.getElementById('numero').value = "";
        document.getElementById('resultado').innerHTML = "";
    });

    // 🚪 SAIR
    document.getElementById('btnVoltar').addEventListener('click', function () {
        location.reload();
    });

});
