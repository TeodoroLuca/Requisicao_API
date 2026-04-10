# 🔗 Buscador de Endereço por CEP – Middleware & API REST

<div align="center">

### 🚀 [Clique aqui para acessar o projeto](https://teodoroluca.github.io/Requisicao_API/)

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Hospedagem](https://img.shields.io/badge/Deploy-GitHub_Pages-orange)

</div>

---

## 📌 Sobre o Projeto

Projeto desenvolvido para demonstrar o consumo de **APIs REST**, manipulação do **DOM** e a aplicação do conceito de **Middleware no Front-end**, simulando uma camada de validação e controle de requisições.

A aplicação permite a consulta de endereços de forma dinâmica. O diferencial técnico desta versão é a **arquitetura client-side** que simula um middleware: as regras de validação são aplicadas de forma isolada antes da requisição à API, garantindo integridade mesmo em um ambiente estático.

> [!IMPORTANT]
> **Nota de Arquitetura:** Por ser hospedado no GitHub Pages, não há back-end. Toda a lógica de intercepção foi implementada utilizando apenas JavaScript no navegador, simulando o comportamento de servidores reais.

---

## 🧠 Arquitetura da Aplicação

Mesmo sem servidor, a aplicação segue uma estrutura lógica profissional:

**Fluxo de Dados:** `Interface (Front-end)` ➔ `Validação (Middleware simulado)` ➔ `Requisição API` ➔ `Resposta (ViaCEP)`

### ⚙️ Middleware (Simulado no Front-end)
O projeto implementa uma função que atua como um middleware, interceptando a execução antes da chamada à API.

* **Verificação:** Validação do CAPTCHA (Cloudflare Turnstile) e formato do CEP.
* **Controle de Fluxo:** Bloqueio de requisições inválidas antes de atingirem o serviço externo.
* **Conceito:** Demonstra como separar a lógica de negócio (regras) da lógica de infraestrutura (fetch/requisição).

---

## 🚀 Funcionalidades

- [x] **Consulta de CEP:** Integração com a API ViaCEP.
- [x] **Middleware Simulado:** Controle de fluxo e validação prévia.
- [x] **Segurança:** Validação com CAPTCHA (Cloudflare Turnstile).
- [x] **Interface Moderna:** Estética *Glassmorphism* e design responsivo.
- [x] **UX:** Tratamento de erros e feedback em tempo real.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
| :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript (ES6+) |
| **Segurança** | Cloudflare Turnstile |
| **API Externa** | ViaCEP REST API |

---

## 📅 Atualizações Recentes

### **10/04/2026**
- ✨ Implementação de middleware simulado no front-end.
- 🏗️ Organização da lógica de validação antes das requisições.
- ⚡ Melhoria no controle de fluxo da aplicação.

### **09/04/2026**
- 🛡️ Implementação do CAPTCHA com Cloudflare Turnstile.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Teodoro**.

---
*Este repositório serve como demonstração de boas práticas em arquitetura cliente-side e manipulação de fluxos assíncronos.*
