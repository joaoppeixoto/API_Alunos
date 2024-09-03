const express = require('express');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const studentRoutes = require('./routes/studentRoutes');

// Load Swagger document
const swaggerDocument = YAML.load('./src/swagger.yaml');

// Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/students', studentRoutes);

app.get('/', (_req, res) => {
  res.send('Chegando normal')});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

