# trab2_APIMashup
Trabalho Prático #2 – API Mashup
# Mashup de APIs – Trabalho 2 de Programação Web

**Autores:**  
- Diogo Neto (29510)
- Hugo Carvalho (31791)

## Descrição

Aplicação web com autenticação e integração de APIs externas.  
Permite ao utilizador pesquisar cidades/países e devolve:
- **Clima atual** (OpenWeatherMap)
- **Resumo enciclopédico** (Wikipedia)

O histórico de pesquisas é guardado em MongoDB, associado a cada utilizador autenticado.

## Tecnologias

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express, Passport-local, Express-session
- **Base de dados:** MongoDB (Atlas)
- **APIs externas:** OpenWeatherMap, Wikipedia REST
- **Outros:** Axios, Mongoose, Bcrypt, dotenv, connect-mongo

## Funcionalidades

- Registo e login de utilizador (password encriptada)
- Proteção de rotas (apenas autenticados podem pesquisar)
- Pesquisa de termos (cidade, país, artista, etc)
- Consulta a duas APIs externas (clima e resumo)
- Histórico de pesquisas apresentado na dashboard
- Logout seguro
- Interface moderna e responsiva

## Estrutura do Projeto

├── models
│   └── User.js
├── node_modules
├── public
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
├── routes
│   ├── auth.js
│   └── api.js
├── views
├── .env
├── .gitignore
├── README.md
├── app.js
├── package-lock.json
├── package.json


## Instalação e Execução Local

1. **Clonar o repositório**

   git clone https://github.com/PWEB-2425/trab2_APIMashup.git

2. **Instalar dependências**

   npm install

3. **Configurar variáveis de ambiente**

   **MONGODB_URI**=mongodb+srv://chugo:1234@cluster0.o1zn32x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

   **SESSION_SECRET**=porco

   **API_KEY_OPENWEATHERMAP**=edcb0a53a63fd2cc20d79e6f3a28bef2

   **API_KEY_UNSPLASH**=o9d6Z4_2tzKGaYhPtAphmZQoUGX2V7LJYY4fr44dROg

4. **Correr a aplicação localmente**

   npm start

   ACEDE EM: http://localhost:3000


## Deploy

O projeto está disponível online em: 
https://trab2-apimashup.onrender.com

## Como usar

Regista-te com um nome de utilizador e password.

Faz login.

Pesquisa pelo nome de uma cidade, país, etc.

Vê o clima atual e o resumo da Wikipedia.

Consulta o histórico de pesquisas guardado na base de dados.

## Notas importantes

Todas as chamadas às APIs externas são feitas pelo servidor (as chaves nunca ficam no frontend).

Passwords são guardadas encriptadas (bcrypt).

O histórico de cada utilizador é privado.

O projeto está pronto a correr em qualquer ambiente Node.js compatível.