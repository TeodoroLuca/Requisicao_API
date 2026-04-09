document.addEventListener("DOMContentLoaded", function () {

    // 🔐 VALIDAÇÃO COM CAPTCHA
    document.getElementById('formValidade').addEventListener('submit', function (e) {
        e.preventDefault();

        const captchaResponse =
            document.querySelector('[name="cf-turnstile-response"]')?.value;

        if (!captchaResponse) {
            document.getElementById('mensagemErro').style.display = 'block';
            return;
        }

        document.getElementById('mensagemErro').style.display = 'none';

        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'flex';
    });

    // 🔎 BUSCAR CEP
    document.getElementById('btnBuscar').addEventListener('click', async function () {

        const cep = document.getElementById('cep').value.replace(/\D/g, '');
        let numero = document.getElementById('numero').value.trim();
        const resultadoDiv = document.getElementById('resultado');

        // ✔️ CORREÇÃO S/N
        if (numero === "") {
            numero = "S/N";
        }

        if (cep.length !== 8) {
            resultadoDiv.innerHTML =
                "<p style='color:#ff4d4d'>CEP inválido!</p>";
            return;
        }

        resultadoDiv.innerHTML =
            "<p>🔍 Buscando endereço...</p>";

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

        } catch (error) {// 1. MIDDLEWARE DE VALIDAÇÃO (CONTROLE DE ACESSO)
document.getElementById('formValidade').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura o token do Turnstile
    const captchaResponse = document.querySelector('[name="cf-turnstile-response"]').value;

    if (!captchaResponse) {
        document.getElementById('mensagemErro').style.display = 'block';
    } else {
        // Sucesso: Libera o acesso para o buscador
        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'flex';
    }
});

// 2. BUSCA DE CEP E EXIBIÇÃO DO NÚMERO
document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numDigitado = document.getElementById('numero').value; // <--- CAPTURA O NÚMERO AQUI
    const resultadoDiv = document.getElementById('resultado');

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>CEP inválido!</p>";
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>CEP não encontrado.</p>";
        } else {
            // AQUI É ONDE O NÚMERO É "PRINTADO" NA TELA
            resultadoDiv.innerHTML = `

            resultadoDiv.innerHTML =
                "<p style='color:#ff4d4d'>Erro na consulta.</p>";
        }
    });

    // 🧹 LIMPAR (100% FUNCIONANDO)
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
