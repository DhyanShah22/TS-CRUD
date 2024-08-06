"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getStudents = exports.createStudent = void 0;
const studentModels_1 = require("../models/studentModels");
const logger_1 = __importDefault(require("../logger/logger"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        logger_1.default.info('Creating Data.');
        const { Name, RollNo, BirthDate, Division, Subject, Marks } = req.body;
        const student = new studentModels_1.StudentTS({ Name, RollNo, BirthDate, Division, Subject, Marks });
        yield student.save();
        logger_1.default.info('Data saved.');
        res.status(201).json(student);
    }
    catch (err) {
        logger_1.default.error('Error creating data.', err);
        res.status(500).send(err);
    }
});
exports.createStudent = createStudent;
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield studentModels_1.StudentTS.find();
        logger_1.default.info('Data retrieved.');
        res.status(200).json(students);
    }
    catch (err) {
        logger_1.default.error('Error retrieving data.', err);
        res.status(500).send(err);
    }
});
exports.getStudents = getStudents;
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModels_1.StudentTS.findById(req.params.id);
        if (!student) {
            logger_1.default.error('Student not found.');
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    }
    catch (err) {
        logger_1.default.error('Error retrieving data.', err);
        res.status(500).send(err);
    }
});
exports.getStudentById = getStudentById;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Name, RollNo, BirthDate, Division, Subject, Marks } = req.body;
        const student = yield studentModels_1.StudentTS.findByIdAndUpdate(req.params.id, { Name, RollNo, BirthDate, Division, Subject, Marks }, { new: true, runValidators: true });
        if (!student) {
            logger_1.default.error('Student not found.');
            return res.status(404).json({ message: 'Student not found' });
        }
        logger_1.default.info('Data updated.');
        res.status(200).json(student);
    }
    catch (err) {
        logger_1.default.error('Error updating data.', err);
        res.status(500).send(err);
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentModels_1.StudentTS.findByIdAndDelete(req.params.id);
        if (!student) {
            logger_1.default.error('Student not found.');
            return res.status(404).json({ message: 'Student not found' });
        }
        logger_1.default.info('Student deleted.');
        res.status(200).json({ message: 'Student deleted' });
    }
    catch (err) {
        logger_1.default.error('Error deleting data.', err);
        res.status(500).send(err);
    }
});
exports.deleteStudent = deleteStudent;
//# sourceMappingURL=studentController.js.map