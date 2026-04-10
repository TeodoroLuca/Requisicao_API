// 1. VALIDAÇÃO (FRONT-END)
document.getElementById('formValidade').addEventListener('submit', function(e) {
    e.preventDefault();

    const token = document.querySelector('[name="cf-turnstile-response"]').value;
    const erro = document.getElementById('mensagemErro');

    if (!token) {
        erro.style.display = 'block';
        return;
    }

    erro.style.display = 'none';

    // Libera acesso
    document.getElementById('paginaValidade').style.display = 'none';
    document.getElementById('buscador').style.display = 'block';
});


// 2. BUSCAR CEP DIRETO NA API
document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = "";

    if (cep.length !== 8) {
        resultado.innerHTML = "<p style='color:red'>CEP inválido</p>";
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            resultado.innerHTML = "<p style='color:red'>CEP não encontrado</p>";
            return;
        }

        resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Número:</strong> ${numero || 'S/N'}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
        `;

    } catch {
        resultado.innerHTML = "<p style='color:red'>Erro ao buscar CEP</p>";
    }
});


// 3. LIMPAR
document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
});


// 4. VOLTAR
document.getElementById('btnVoltar').addEventListener('click', function() {
    location.reload();
});