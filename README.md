# 🔗 Buscador de Endereço por CEP – Middleware & API REST

[![Acesse o Projeto](https://img.shields.io/badge/Acessar%20Projeto-Clique%20Aqui-blue?style=for-the-badge&logo=github)](https://teodoroluca.github.io/Requisicao_API/)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=Cloudflare&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=flat-square&logo=github&logoColor=white)

</div>

---

## 📌 Sobre o Projeto

Projeto desenvolvido para demonstrar o consumo de **APIs REST**, manipulação avançada do **DOM** e a aplicação do conceito de **Middleware no Front-end**, simulando uma camada de validação e controle de requisições em uma arquitetura *client-side*.

A aplicação permite a consulta de endereços de forma dinâmica. O diferencial técnico desta versão é a simulação de um middleware: as regras de validação são aplicadas de forma isolada antes da requisição à API, garantindo integridade e controle de fluxo, mesmo em um ambiente estático.

> [!IMPORTANT]
> **Nota de Arquitetura:** Por ser hospedado no GitHub Pages, não há back-end. Toda a lógica de intercepção e validação foi implementada utilizando apenas JavaScript no navegador, simulando o comportamento de servidores reais.

---

## 🧠 Arquitetura da Aplicação

Mesmo sem servidor, a aplicação segue uma estrutura lógica profissional:

**Fluxo de Dados:** `Interface (Front-end)` ➔ `Validação (Middleware simulado)` ➔ `Requisição API` ➔ `Resposta (ViaCEP)`

### ⚙️ Middleware (Simulado no Front-end)
O projeto implementa uma função que atua como um middleware, interceptando a execução antes da chamada à API externa.

* **🛡️ Verificação:** Validação do token do CAPTCHA (Cloudflare Turnstile) e integridade do formato do CEP.
* **🚦 Controle de Fluxo:** Bloqueio preventivo de requisições inválidas ou não autorizadas antes de atingirem a API.
* **💡 Conceito:** Demonstração prática de como separar a lógica de negócio (regras e segurança) da lógica de infraestrutura (fetch/consumo de serviço).

---

## 🚀 Funcionalidades

- [x] **Consulta de CEP:** Integração em tempo real com a API ViaCEP.
- [x] **Middleware Simulado:** Camada de lógica pré-requisição para controle de fluxo.
- [x] **Segurança:** Validação com Cloudflare Turnstile para prevenção de bots.
- [x] **Interface Moderna:** Design responsivo com estética *Glassmorphism*.
- [x] **UX:** Tratamento de erros amigável e feedback visual dos estados da requisição.

---

## 📅 Atualizações Recentes

### **10/04/2026**
- ✨ Implementação de middleware simulado no front-end.
- 🏗️ Organização da lógica de validação isolada das requisições.
- ⚡ Melhoria no controle de fluxo e manipulação assíncrona.

### **09/04/2026**
- 🛡️ Implementação do CAPTCHA com Cloudflare Turnstile.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Teodoro**.

---

