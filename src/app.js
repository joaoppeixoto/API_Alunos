const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

// Configurações do Swagger abaixo
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Alunos',
      version: '1.0.0',
      description: 'API para gerenciamento de alunos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/studentRoutes.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Configuração das rotas
const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

