document.addEventListener("DOMContentLoaded", function () {

// Estado global do captcha  
let captchaValido = false;  

// ================================  
// MIDDLEWARE  
// ================================  
// Função responsável por validar regras antes da requisição  
function validarRequisicao(cep) {  
    if (!captchaValido) {  
        throw new Error("Valide o CAPTCHA antes de continuar.");  
    }  

    if (!cep || cep.length !== 8) {  
        throw new Error("CEP inválido. Digite 8 números.");  
    }  
}  

// ================================  
// 1. GERENCIAMENTO DE TELAS E VALIDAÇÃO  
// ================================  
document.getElementById('formValidade').addEventListener('submit', function(e) {  
    e.preventDefault();  

    // Pega o token do Cloudflare  
    const captchaResponse = document.querySelector('[name="cf-turnstile-response"]')?.value;  

    if (!captchaResponse) {  
        document.getElementById('mensagemErro').style.display = 'block';  
    } else {  
        captchaValido = true; // marca como validado  

        document.getElementById('mensagemErro').style.display = 'none';  
        document.getElementById('paginaValidade').style.display = 'none';  
        document.getElementById('buscador').style.display = 'flex';  
    }  
});  

// ================================  
// 2. LÓGICA DO BUSCADOR DE CEP  
// ================================  
document.getElementById('btnBuscar').addEventListener('click', async function() {  
    const cep = document.getElementById('cep').value.replace(/\D/g, '');  
    const numero = document.getElementById('numero').value;  
    const resultadoDiv = document.getElementById('resultado');  

    resultadoDiv.innerHTML = "";  

    try {  
        // ================================  
        // APLICAÇÃO DO MIDDLEWARE  
        // ================================  
        validarRequisicao(cep);  

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);  
        const data = await response.json();  

        if (data.erro) {  
            throw new Error("CEP não encontrado.");  
        }  

        resultadoDiv.innerHTML = `  
            <div style="text-align: left; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">  
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>  
                <p><strong>Número:</strong> ${numero || 'S/N'}</p>  
                <p><strong>Bairro:</strong> ${data.bairro}</p>  
                <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>  
            </div>  
        `;  

    } catch (error) {  
        resultadoDiv.innerHTML = `<p style='color:#ff4d4d'>${error.message}</p>`;  
    }  
});  

// ================================  
// 3. FUNÇÃO DO BOTÃO LIMPAR  
// ================================  
document.getElementById('btnLimpar').addEventListener('click', function() {  
    document.getElementById('cep').value = "";  
    document.getElementById('numero').value = "";  
    document.getElementById('resultado').innerHTML = "";  
});  

// ================================  
// 4. BOTÃO VOLTAR / SAIR  
// ================================  
document.getElementById('btnVoltar').addEventListener('click', function() {  
    location.reload();  
});

});