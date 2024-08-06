"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const router = (0, express_1.Router)();
exports.studentRoutes = router;
router.post('/students', studentController_1.createStudent);
router.get('/students', studentController_1.getStudents);
router.get('/students/:id', studentController_1.getStudentById);
router.put('/students/:id', studentController_1.updateStudent);
router.delete('/students/:id', studentController_1.deleteStudent);
//# sourceMappingURL=studentRoutes.js.map