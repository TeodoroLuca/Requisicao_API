document.getElementById('btnBuscar').addEventListener('click', async function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    const token = document.querySelector('[name="cf-turnstile-response"]').value;

    if (cep.length !== 8) {
        resultadoDiv.innerHTML = "<p style='color:red'>CEP inválido</p>";
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/buscar-cep', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cep, numero, token })
        });

        const data = await response.json();

        if (!response.ok) {
            resultadoDiv.innerHTML = `<p style='color:red'>${data.erro}</p>`;
            return;
        }

        resultadoDiv.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Número:</strong> ${data.numero}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.cidade} - ${data.uf}</p>
        `;

    } catch (error) {
        resultadoDiv.innerHTML = "<p style='color:red'>Erro no servidor</p>";
    }
});