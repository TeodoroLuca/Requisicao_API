function iniciar() {
    document.getElementById("btnIniciar")
        .addEventListener("click", mostrarBuscador);

    document.getElementById("btnBuscar")
        .addEventListener("click", buscarCep);

    document.getElementById("btnLimpar")
        .addEventListener("click", limparCampos);

    document.getElementById("btnVoltar")
        .addEventListener("click", voltarInicio);
}

window.onload = iniciar;

/* ===== MOSTRAR PAGINA DE VALIDAÇÃO ===== */
document.getElementById("formValidade").addEventListener("submit", validarUsuario);

function mostrarPaginaValidade() {
    document.getElementById("paginaValidade").style.display = "block";
    document.getElementById("bemVindo").style.display = "none";
    document.getElementById("buscador").style.display = "none";
}

/* ===== VALIDAR USUÁRIO COM CAPTCHA ===== */
async function validarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const resultado = document.getElementById("mensagemErro");

    // Verifica o CAPTCHA
    const token = document.querySelector('[name="cf-turnstile-response"]')?.value;

    if (!token) {
        resultado.style.display = "block";
        return;
    } else {
        resultado.style.display = "none";
    }

    if (!nome || !email) {
        resultado.innerHTML = "⚠️ Preencha todos os campos!";
        resultado.style.display = "block";
        return;
    }

    // Caso tudo esteja válido, vamos liberar o botão "Iniciar"
    document.getElementById("paginaValidade").style.display = "none";
    document.getElementById("bemVindo").style.display = "block";
}

/* ===== MOSTRAR BUSCADOR ===== */
function mostrarBuscador() {
    document.getElementById("bemVindo").style.display = "none";
    document.getElementById("buscador").style.display = "block";

    // cria histórico no navegador
    history.pushState({ tela: "buscador" }, "", "#buscador");
}

/* ===== VOLTAR PARA INÍCIO ===== */
function voltarInicio() {
    history.back(); // usa o histórico do navegador
}

/* ===== CONTROLE DA SETA DO NAVEGADOR ===== */
window.onpopstate = function (event) {
    if (event.state && event.state.tela === "buscador") {
        document.getElementById("bemVindo").style.display = "none";
        document.getElementById("buscador").style.display = "block";
    } else {
        document.getElementById("buscador").style.display = "none";
        document.getElementById("bemVindo").style.display = "block";
        limparCampos();
    }
};

/* ===== LIMPAR ===== */
function limparCampos() {
    document.getElementById("cep").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}

/* ===== BUSCAR CEP ===== */
async function buscarCep() {
    const cep = document.getElementById("cep").value.trim();
    const numero = document.getElementById("numero").value || "S/N";
    const resultado = document.getElementById("resultado");

    // 🔐 pega o token do Turnstile
    const token = document.querySelector('[name="cf-turnstile-response"]')?.value;

    if (!token) {
        resultado.innerHTML = "<p>⚠️ Confirme que você é humano.</p>";
        return;
    }

    if (cep.length !== 8 || isNaN(cep)) {
        resultado.innerHTML = "<p>CEP inválido.</p>";
        return;
    }

    resultado.innerHTML = "<p>🔍 Buscando endereço...</p>";

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            resultado.innerHTML = "<p>❌ CEP não encontrado.</p>";
            return;
        }

        resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
            <p><strong>Número:</strong> ${numero}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;
    } catch {
        resultado.innerHTML = "<p>🚨 Erro ao consultar a API.</p>";
    }
}
