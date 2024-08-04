import { Request, Response } from 'express';
import { StudentTS, IPost } from '../models/studentModels'
import logger from '../logger/logger'

export const createStudent = async (req: Request, res: Response) => {
    try {
        logger.info('Creating Data.')
        const { Name, RollNo, BirthDate, Division, Subject, Marks } = req.body;
        const student = new StudentTS({ Name, RollNo, BirthDate, Division, Subject, Marks });
        await student.save();
        logger.info('Data saved.')
        res.status(201).json(student);
    } catch (err) {
        logger.error('Error creating data.', err);
        res.status(500).send(err);
    }
};

export const getStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentTS.find();
        logger.info('Data retrieved.')
        res.status(200).json(students);
    } catch (err) {
        logger.error('Error retrieving data.', err);
        res.status(500).send(err);
    }
};

export const getStudentById = async (req: Request, res: Response) => {
    try {
        const student = await StudentTS.findById(req.params.id);
        if (!student) {
            logger.error('Student not found.')
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (err) {
        logger.error('Error retrieving data.', err);
        res.status(500).send(err);
    }
};

export const updateStudent = async (req: Request, res: Response) => {
    try {
        const { Name, RollNo, BirthDate, Division, Subject, Marks } = req.body;
        const student = await StudentTS.findByIdAndUpdate(
            req.params.id,
            { Name, RollNo, BirthDate, Division, Subject, Marks },
            { new: true, runValidators: true }
        );
        if (!student) {
            logger.error('Student not found.')
            return res.status(404).json({ message: 'Student not found' });
        }
        logger.info('Data updated.')
        res.status(200).json(student);
    } catch (err) {
        logger.error('Error updating data.', err);
        res.status(500).send(err);
    }
};

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const student = await StudentTS.findByIdAndDelete(req.params.id);
        if (!student) {
            logger.error('Student not found.')
            return res.status(404).json({ message: 'Student not found' });
        }
        logger.info('Student deleted.')
        res.status(200).json({ message: 'Student deleted' });
    } catch (err) {
        logger.error('Error deleting data.', err);
        res.status(500).send(err);
    }
};
