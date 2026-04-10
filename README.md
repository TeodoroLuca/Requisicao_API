🔗 Buscador de Endereço por CEP – Middleware & API REST

""Link do Projeto" (https://img.shields.io/badge/Acessar_Projeto-Clique_Aqui-00eaff?style=for-the-badge&logo=google-chrome&logoColor=white)" (https://teodoroluca.github.io/Requisicao_API/)

Projeto desenvolvido para demonstrar o consumo de APIs REST, manipulação avançada do DOM e a implementação de Middleware de Segurança real (Back-end) para controle de fluxo, validação e proteção de requisições.

---

📌 Sobre o Projeto

A aplicação permite a consulta de endereços de forma dinâmica e segura. O grande diferencial técnico desta versão é a evolução da arquitetura, saindo de uma validação apenas visual no front-end para uma validação real no servidor utilizando middleware.

Agora, todas as requisições passam por uma API intermediária desenvolvida em Node.js com Express, garantindo maior segurança e controle.

O número do imóvel é capturado manualmente e integrado aos dados retornados pela API ViaCEP, simulando um fluxo real de sistemas como checkouts de e-commerce, sistemas ERP e cadastros empresariais.

---

🧠 Arquitetura da Aplicação

Front-end
   ↓
Token (Cloudflare Turnstile)
   ↓
API Node.js (Express)
   ↓
Middleware de Validação
   ↓
API ViaCEP

---

🔐 Middleware de Segurança (Back-end)

O projeto implementa um middleware real no servidor, responsável por interceptar e validar todas as requisições antes de acessar a lógica principal. A validação do CAPTCHA é feita diretamente no back-end.

✔️ Fluxo de Validação:

1. O front-end gera um token do Turnstile
2. O token é enviado para a API
3. O middleware intercepta a requisição
4. O servidor valida o token com o Cloudflare
5. Apenas requisições válidas seguem para a busca de CEP

---

🔥 Benefícios da Arquitetura

- Segurança real (não pode ser burlado pelo front-end)
- Proteção contra bots com validação server-side
- Controle de requisições e uso da API
- Arquitetura profissional (front + back separados)
- Base pronta para SaaS e APIs mais robustas

---

🚀 Funcionalidades

- Middleware de validação CAPTCHA (Back-end)
- API própria com Node.js + Express
- Consumo de API REST (ViaCEP)
- Integração de dados (CEP + número do imóvel)
- Tratamento de erros completo
- Interface moderna (Glassmorphism)
- Limpeza e reset de estado da aplicação

---

🛠️ Tecnologias Utilizadas

Front-end: HTML5, CSS3 (Flexbox, Glassmorphism), JavaScript (ES6+, Async/Await, DOM)
Back-end: Node.js, Express, Axios
Segurança: Cloudflare Turnstile
API Externa: ViaCEP

---

🔄 API Utilizada

ViaCEP
Endpoint: https://viacep.com.br/ws/{cep}/json/

---

📅 Atualizações Recentes

10/04/2026

- Implementação de middleware real no back-end
- Criação de API própria com Node.js + Express
- Validação segura do CAPTCHA no servidor
- Refatoração do fluxo (front → API → ViaCEP)

09/04/2026

- Implementação inicial do CAPTCHA no front-end

---

👨‍💻 Autor

Desenvolvido por "Teodoro Luca" (https://github.com/teodoroluca)