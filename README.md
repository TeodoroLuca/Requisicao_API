# 🔗 Buscador de Endereço por CEP – Middleware & API REST

[![Link do Projeto](https://img.shields.io/badge/Acessar_Projeto-Clique_Aqui-00eaff?style=for-the-badge&logo=google-chrome&logoColor=white)](https://teodoroluca.github.io/Requisicao_API/)

Projeto desenvolvido para demonstrar o **consumo de APIs REST**, manipulação avançada do DOM e a implementação de **Middleware de Segurança** no front-end para controle de fluxo e integridade de dados.

---

## 📌 Sobre o Projeto

A aplicação permite a consulta de endereços de forma dinâmica e segura. O diferencial técnico deste projeto é a separação de estados da aplicação, onde o acesso às funcionalidades principais é mediado por uma camada de verificação obrigatória.

O **número do imóvel** é capturado manualmente e integrado aos dados retornados pela **API ViaCEP**, simulando um fluxo real de sistemas de cadastro ou checkouts de e-commerce.

---

## 🔐 Arquitetura de Middleware

O projeto utiliza o conceito de **Middleware de Front-end** através do **Cloudflare Turnstile**. 

Diferente de uma validação comum, o sistema intercepta a requisição do usuário antes que ela chegue à lógica de negócio (busca de CEP). O acesso ao buscador é condicionado à existência de um token de segurança válido, garantindo:

* **Proteção contra Bots:** Bloqueio de automações antes do consumo da API.
* **Integridade da Sessão:** Controle de acesso baseado em estado (Validado vs. Não-Validado).
* **Otimização de Recursos:** Evita requisições desnecessárias a APIs externas e protege a cota de uso.

---

## 🚀 Funcionalidades

* **Middleware de Segurança:** Validação obrigatória com Cloudflare Turnstile antes de liberar o acesso.
* **Consumo de API REST:** Utilização de `fetch` assíncrono para busca de dados em tempo real.
* **Persistência de Dados Local:** Integração do número residencial informado com os dados retornados pela API.
* **Tratamento de Exceções:** Gestão de erros para CEPs inválidos, incompletos ou inexistentes.
* **Interface Modern UI:** Design baseado em *Glassmorphism* (efeito de vidro) totalmente responsivo.
* **Gestão de Estado:** Botão de limpeza inteligente que reseta inputs e remove os resultados do DOM.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3** (Variáveis, Flexbox e Efeitos de Glassmorphism)
* **JavaScript (ES6+)** (Async/Await, Manipulação de DOM e Event Listeners)
* **API REST** (ViaCEP)
* **Cloudflare Turnstile** (Implementação de Middleware de segurança)

---

## 🔄 API Utilizada

* **ViaCEP**
* **Endpoint:** `https://viacep.com.br/ws/{cep}/json/`

---

## 📅 Atualizações Recentes

* **09/04/2026**: Implementação da arquitetura de middleware no fluxo de entrada.
* **Segurança**: Adicionada camada de proteção contra acessos automatizados (bots).
* **UX/UI**: Refatoração do sistema de limpeza de campos e exibição dinâmica de resultados.

---
Desenvolvido por [Teodoro Luca](https://github.com/teodoroluca)
