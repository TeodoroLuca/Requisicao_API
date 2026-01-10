async function buscarCep() {
    const cep = document.getElementById("cep").value;
    const resultado = document.getElementById("resultado");

    if (cep.length !== 8) {
        resultado.innerHTML = "<p>CEP inválido.</p>";
        return;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();
        const numero = document.getElementById("numero").value || "S/N";

        if (dados.erro) {
            resultado.innerHTML = "<p>CEP não encontrado.</p>";
            return;
        }

        resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
            <p><strong>Número:</strong> ${numero}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;
    } catch (error) {
        resultado.innerHTML = "<p>Erro ao consultar a API.</p>";
    }
}
