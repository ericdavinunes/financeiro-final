const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); // caminho para o seu arquivo Swagger

const transacoesRoutes = require('./routes/transacoes.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas da API
app.use('/api/transacoes', transacoesRoutes);

// SPA frontend (Angular/React/etc.)
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;
