// 1. GERENCIAMENTO DE TELAS E VALIDAÇÃO
document.getElementById('formValidade').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega o token do Cloudflare
    const captchaResponse = document.querySelector('[name="cf-turnstile-response"]').value;

    if (!captchaResponse) {
        // Se não resolveu o CAPTCHA
        document.getElementById('mensagemErro').style.display = 'block';
    } else {
        // Se validou, esconde a tela de validação e mostra o buscador
        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'flex'; // Usamos flex para manter o estilo do CSS
    }
});

// 2. LÓGICA DO BUSCADOR DE CEP
document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove letras
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>CEP inválido! Digite 8 números.</p>";
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>CEP não encontrado.</p>";
        } else {
            // Exibe o endereço e o número digitado
            resultadoDiv.innerHTML = `
                <div style="text-align: left; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Número:</strong> ${numero || 'S/N'}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;
        }
    } catch (error) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>Erro ao conectar no servidor.</p>";
    }
});

// 3. FUNÇÃO DO BOTÃO LIMPAR (CORRIGIDO)
document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('cep').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('resultado').innerHTML = "";
});

// 4. BOTÃO VOLTAR / SAIR
document.getElementById('btnVoltar').addEventListener('click', function() {
    // Recarrega a página para voltar ao estado inicial de segurança
    location.reload();
});
