// 1. MIDDLEWARE DE VALIDAÇÃO (CONTROLE DE ACESSO)
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
                <div style="text-align: left; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">
                    <p style="margin: 5px 0;"><strong>Rua:</strong> ${data.logradouro}</p>
                    <p style="margin: 5px 0;"><strong>Número:</strong> ${numDigitado || 'Não informado'}</p>
                    <p style="margin: 5px 0;"><strong>Bairro:</strong> ${data.bairro}</p>
                    <p style="margin: 5px 0;"><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                </div>
            `;
        }
    } catch (error) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>Erro na consulta.</p>";
    }
});

// 3. BOTÃO LIMPAR (AGORA FUNCIONANDO 100%)
document.getElementById('btnLimpar').addEventListener('click', function() {
    // Limpa os campos de texto
    document.getElementById('cep').value = "";
    document.getElementById('numero').value = "";
    
    // Limpa a div de resultado (remove o endereço printado)
    document.getElementById('resultado').innerHTML = "";
    
    console.log("Campos limpos com sucesso!");
});

// 4. BOTÃO VOLTAR (RESET TOTAL)
document.getElementById('btnVoltar').addEventListener('click', function() {
    location.reload(); 
});
