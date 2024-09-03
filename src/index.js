
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const studentRoutes = require('./routes/studentRoutes');
const studentController = require('./controllers/studentController');

const app = express();
const port = 3000;

// Load Swagger document
const swaggerDocument = YAML.load('./src/swagger.yaml');

// Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/students', studentRoutes);

app.get('/', (_req, res) => {
  res.send('Chegando normal');
});

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

