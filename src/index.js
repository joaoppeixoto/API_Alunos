const { Sequelize } = require('sequelize');

// Configura a conexão com o banco de dados
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql', 
});

// Verifica a conexão
sequelize.authenticate()
  .then(() => console.log('Conectado ao DB com sucesso!'))
  .catch(err => console.error('Não foi possível conectar ao DB:', err));

// Exporta a instância do Sequelize
module.exports = sequelize;