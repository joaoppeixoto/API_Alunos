/*const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nota_primeiro_semestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota_segundo_semestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nome_professor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_sala: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'students',
  timestamps: false,
});

module.exports = Student;*/