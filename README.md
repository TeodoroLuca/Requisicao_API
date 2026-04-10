# 🔗 Buscador de Endereço por CEP – Middleware & API REST

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![Licença](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Hospedagem](https://img.shields.io/badge/Deploy-GitHub_Pages-orange)

Projeto desenvolvido para demonstrar o consumo de **APIs REST**, manipulação avançada do **DOM** e a aplicação do conceito de **Middleware no Front-end**, simulando uma camada de validação e controle de fluxo de dados.

---

## 📌 Sobre o Projeto

A aplicação realiza a consulta dinâmica de endereços a partir de um CEP informado. 

O diferencial técnico desta versão é a **arquitetura client-side**, que simula o comportamento de um middleware. Isso significa que as regras de validação e segurança são aplicadas de forma isolada antes que a requisição atinja o serviço externo, garantindo integridade mesmo em um ambiente estático.

> [!IMPORTANT]
> **Nota de Arquitetura:** Por ser hospedado no GitHub Pages, o projeto não possui back-end (Node.js/Python). Toda a lógica de intercepção foi implementada em JavaScript puro no navegador.

---

## 🧠 Arquitetura da Aplicação

Mesmo operando sem um servidor dedicado, a aplicação segue um fluxo lógico de sistemas corporativos:

**Fluxo de Dados:**
`Interface (Front-end)` ➔ `Validação (Middleware Simulado)` ➔ `Requisição API` ➔ `Resposta (ViaCEP)`

### ⚙️ O Middleware (Simulado)
O projeto implementa uma função que intercepta a execução antes da chamada à API. 
* **O que é validado:** Verificação do CAPTCHA (Cloudflare Turnstile) e formato do CEP.
* **Controle de Fluxo:** Bloqueio preventivo de requisições inválidas ou não autorizadas.
* **Objetivo:** Simular como middlewares de back-end aplicam regras de negócio antes da execução da lógica principal.

---

## 🚀 Funcionalidades

- [x] **Consulta de CEP:** Integração em tempo real com a API ViaCEP.
- [x] **Middleware de Validação:** Camada de lógica pré-requisição.
- [x] **Segurança:** Integração com Cloudflare Turnstile para prevenção de bots.
- [x] **Interface Moderna:** Design responsivo com estética *Glassmorphism*.
- [x] **UX/UI:** Tratamento de erros amigável e campos autocompletáveis.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
| :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript (ES6+) |
| **Segurança** | Cloudflare Turnstile |
| **API Externa** | ViaCEP REST API |

---

## 📅 Log de Atualizações

### **10/04/2026**
- ✨ Implementação da arquitetura de middleware simulado no front-end.
- 🏗️ Refatoração da lógica de validação para desacoplamento de código.
- ⚡ Melhoria no controle de fluxo e tratamento de estados da UI.

### **09/04/2026**
- 🛡️ Implementação de camada de segurança com Cloudflare Turnstile.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Teodoro**.  

