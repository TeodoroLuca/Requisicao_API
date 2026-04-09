
# 🔗 **Buscador de Endereço por CEP – Consumo de API REST**

👉 Acesse: [https://teodoroluca.github.io/Requisicao_API/](https://teodoroluca.github.io/Requisicao_API/)

Projeto desenvolvido com o objetivo de demonstrar o **consumo de APIs REST**, manipulação de dados no front-end e integração entre informações fornecidas pelo usuário e dados retornados por uma API externa.

---

## 📌 Sobre o Projeto

A aplicação permite que o usuário informe um **CEP** e, a partir disso, realiza uma requisição para a **API ViaCEP**, retornando os dados de endereço como logradouro, bairro, cidade e estado.
O **número do imóvel** é informado manualmente pelo usuário, uma vez que APIs de CEP não fornecem esse dado.

Além disso, o sistema conta com uma **camada de segurança adicional**, utilizando validação de usuário através de CAPTCHA.

---

## 🔐 Segurança

O projeto possui validação de segurança utilizando o serviço **Cloudflare Turnstile CAPTCHA**, garantindo maior proteção contra bots e acessos automatizados.

---

## 🚀 Funcionalidades

* Consulta de endereço a partir do CEP
* Consumo de API REST utilizando `fetch`
* Tratamento de erros (CEP inválido ou inexistente)
* Integração de dados da API com dados do usuário
* Interface moderna e responsiva
* Validação de usuário com CAPTCHA (Cloudflare Turnstile)
* Código organizado e legível

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **API REST (ViaCEP)**
* **Cloudflare Turnstile CAPTCHA**

---

## 🔄 API Utilizada

* **ViaCEP**
* Endpoint: `https://viacep.com.br/ws/{cep}/json/`

---

## 🔄 Atualizações

* 📅 Sistema atualizado em **09/04/2026**
* 🔐 Adicionada validação de segurança com **Cloudflare Turnstile CAPTCHA**
* 🛡️ Melhoria na proteção contra acessos automatizados (bots)
