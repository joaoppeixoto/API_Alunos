

const students = [];

// CRUD operations
exports.createStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
};

exports.getAllStudents = (_req, res) => {
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


