# 💰 Financeiro Pessoal

Projeto completo de controle financeiro pessoal, com **frontend em React + Vite** e **backend em Node.js + Express**, permitindo registrar entradas e saídas, calcular saldo e visualizar o histórico com persistência real dos dados.

---

## 🚀 Funcionalidades

### 🔧 Backend (Node.js + Express)
- ✅ CRUD de transações financeiras
- ✅ Persistência de dados com banco de dados
- ✅ API RESTful estruturada no padrão MVC
- ✅ Documentação com Swagger UI
- ✅ Integração com o frontend

### 💻 Frontend (React + Vite)
- ✅ Visualização de Entradas e Saídas
- ✅ Cálculo automático do saldo total
- ✅ CRUD de lançamentos (comunicação com API)
- ✅ Navegação entre seções
- ✅ Componentes reutilizáveis e CSS moderno

---

## 📂 Estrutura do Projeto

```
financeiro-final/
├── backend/
│   ├── app.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── docs/
│   │   └── swagger.json
│   └── database/ (se houver)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
```

---

## 🧪 Documentação da API (Swagger)

A documentação da API está disponível via Swagger UI:

```
http://localhost:3000/swagger
```

- Interativo e fácil de testar os endpoints
- Baseado no padrão OpenAPI 2.0
- Endpoints disponíveis:
  - `GET /transacoes` – Listar transações
  - `POST /transacoes` – Criar nova transação
  - `DELETE /transacoes/{id}` – Excluir por ID

---

## 🛠️ Como rodar o projeto

### 🔁 Backend

1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node app.js
   ```

4. Acesse a API em:
   ```
   http://localhost:3000/api/transacoes
   ```
   E a documentação:
   ```
   http://localhost:3000/swagger
   ```

---

### 🖥️ Frontend

1. Em outro terminal, vá até a pasta do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 🔗 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Swagger UI
- JavaScript
- SQLite ou outro banco configurado

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS3

---

## 🤝 Colaboradores

Projeto desenvolvido por:

- Éric Davi Nunes  
- Eduardo Domingues  
- Débora Lima  
- Matheus Castro  

🎓 Projeto acadêmico para fins de estudo.

📧 **Contato:** eric.sousa@maisunifacisa.com.br

---
