// VALIDAR CAPTCHA
document.getElementById('formValidade').addEventListener('submit', async (e) => {
    e.preventDefault();

    const erro = document.getElementById('mensagemErro');
    erro.style.display = 'none';

    const token = document.querySelector('[name="cf-turnstile-response"]').value;

    if (!token) {
        erro.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/validar-captcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        });

        if (!res.ok) throw new Error();

        document.getElementById('paginaValidade').style.display = 'none';
        document.getElementById('buscador').style.display = 'block';

    } catch {
        erro.style.display = 'block';
    }
});


// BUSCAR CEP
document.getElementById('btnBuscar').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    const token = document.querySelector('[name="cf-turnstile-response"]').value;

    if (cep.length !== 8) {
        resultado.innerHTML = "CEP inválido";
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/buscar-cep', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cep, numero, token })
        });

        const data = await res.json();

        if (!res.ok) {
            resultado.innerHTML = data.erro;
            return;
        }

        resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Número:</strong> ${data.numero}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.cidade} - ${data.uf}</p>
        `;

    } catch {
        resultado.innerHTML = "Erro no servidor";
    }
});


// LIMPAR
document.getElementById('btnLimpar').addEventListener('click', () => {
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
});