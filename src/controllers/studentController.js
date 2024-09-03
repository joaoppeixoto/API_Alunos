/*import { create, findAll, findByPk, update, destroy } from '../models/student';
//const { create, findAll, findByPk, update, destroy } = require('../models/student');


export async function createStudent(req, res) {
  try {
    const student = await create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o aluno.', error });
  }
}

export async function getStudents(_req, res) {
  try {
    const students = await findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter alunos.', error });
  }
}

export async function getStudentById(req, res) {
  try {
    const student = await findByPk(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter aluno.', error });
  }
}

export async function updateStudent(req, res) {
  try {
    const student = await update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar aluno.', error });
  }
}

export async function deleteStudent(req, res) {
  try {
    await destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar aluno.', error });
  }
}*/

const students = [];

// CRUD operations
exports.createStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
};

exports.getAllStudents = (req, res) => {
    res.status(200).json(students);
};

exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).send('Student not found');
    }
    res.status(200).json(student);
};

exports.updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).send('Student not found');
    }
    students[index] = req.body;
    res.status(200).json(students[index]);
};

exports.deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).send('Student not found');
    }
    students.splice(index, 1);
    res.status(204).send();
};


