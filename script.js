// 1. VALIDAÇÃO COM BACKEND (MIDDLEWARE REAL)
document.getElementById('formValidade').addEventListener('submit', async function(e) {
    e.preventDefault();

    const mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.style.display = 'none';

    // Token do Turnstile
    const token = document.querySelector('[name="cf-turnstile-response"]').value;

    if (!token) {
        mensagemErro.style.display = 'block';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/validar-captcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });

        const data = await response.json();

        if (!response.ok) {
            mensagemErro.style.display = 'block';
            return;
        }

        // Libera o buscador
        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'flex';

    } catch (error) {
        mensagemErro.style.display = 'block';
    }
});


// 2. BUSCA DE CEP VIA BACKEND
document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = "";

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>CEP inválido! Digite 8 números.</p>";
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/buscar-cep', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cep, numero })
        });

        const data = await response.json();

        if (!response.ok) {
            resultadoDiv.innerHTML = `<p style='color:#ff4d4d'>${data.erro}</p>`;
            return;
        }

        resultadoDiv.innerHTML = `
            <div style="text-align: left; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Número:</strong> ${data.numero}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.cidade} - ${data.uf}</p>
            </div>
        `;

    } catch (error) {
        resultadoDiv.innerHTML = "<p style='color:#ff4d4d'>Erro ao conectar com o servidor.</p>";
    }
});


// 3. BOTÃO LIMPAR
document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('cep').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('resultado').innerHTML = "";
});


// 4. BOTÃO VOLTAR / SAIR
document.getElementById('btnVoltar').addEventListener('click', function() {
    location.reload();
});