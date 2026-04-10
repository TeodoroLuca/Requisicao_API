# 🔗 Buscador de Endereço por CEP – Middleware & API REST

[![Acesse o Projeto](https://img.shields.io/badge/Acessar%20Projeto-Clique%20Aqui-blue?style=for-the-badge&logo=github)](https://teodoroluca.github.io/Requisicao_API/)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

Projeto desenvolvido para demonstrar o consumo de APIs REST, manipulação avançada do DOM e a implementação de um **Middleware de Segurança real (Back-end)** para controle de fluxo, validação e proteção de requisições.

---

## 📌 Sobre o Projeto

A aplicação permite a consulta de endereços de forma dinâmica e segura. O diferencial técnico desta versão é a **evolução da arquitetura**: a validação deixou de ser meramente visual no front-end para se tornar uma regra de negócio real no servidor.

Agora, todas as requisições passam por uma API intermediária desenvolvida em Node.js, garantindo que dados sensíveis e integrações externas (como o ViaCEP) só sejam acessados após a validação de segurança.

> **Fluxo de Dados:** O número do imóvel é capturado manualmente e integrado aos dados retornados pela API ViaCEP, simulando sistemas reais de e-commerce e ERPs empresariais.

---

## 🧠 Arquitetura da Aplicação

A comunicação segue o fluxo abaixo:

`Front-end` ➔ `Token (Cloudflare Turnstile)` ➔ `API Node.js (Express)` ➔ `Middleware de Validação` ➔ `API ViaCEP`

---

## 🔐 Middleware de Segurança (Back-end)

O projeto implementa um middleware no servidor que intercepta e valida todas as requisições. A validação do CAPTCHA (Turnstile) é feita via **server-side**, o que impede que bots ou usuários mal-intencionados burlem a proteção através do console do navegador.

### ✔️ Fluxo de Validação:
1. O **Front-end** gera um token de desafio do Turnstile.
2. O token é enviado no corpo (body) da requisição para a **API**.
3. O **Middleware** intercepta a requisição e valida o token diretamente com os servidores da Cloudflare.
4. Somente após a validação positiva, a requisição é liberada para buscar os dados no **ViaCEP**.

---

## 🔥 Benefícios da Arquitetura

* **Segurança Real:** Proteção impossível de ser burlada apenas modificando o front-end.
* **Proteção Anti-Bot:** Validação robusta para evitar chamadas excessivas às APIs.
* **Arquitetura Profissional:** Separação clara entre cliente (Front) e servidor (Back).
* **Pronto para Escala:** Estrutura base utilizada em sistemas SaaS e APIs profissionais.

---

## 🚀 Funcionalidades

* **Back-end:** API própria com Node.js + Express.
* **Segurança:** Middleware de validação CAPTCHA (Server-side).
* **Integração:** Consumo de API REST (ViaCEP).
* **UX/UI:** Interface moderna com estilo **Glassmorphism**.
* **Resiliência:** Tratamento de erros completo e limpeza automática de estado.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
| :--- | :--- |
| **Front-end** | HTML5, CSS3 (Flexbox, Glassmorphism), JavaScript (ES6+, Async/Await) |
| **Back-end** | Node.js, Express, Axios |
| **Segurança** | Cloudflare Turnstile |
| **API Externa** | ViaCEP |

---

## 📅 Atualizações Recentes

### **10/04/2026**
* Implementação de middleware real no back-end.
* Criação de API própria com Node.js + Express.
* Validação segura do CAPTCHA no servidor.
* Refatoração do fluxo (front → API → ViaCEP).

### **09/04/2026**
* Implementação inicial do CAPTCHA no front-end.

---

## 👨‍💻 Autor

Desenvolvido por **Teodoro Luca**.
