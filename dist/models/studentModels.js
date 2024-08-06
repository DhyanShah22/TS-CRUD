"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTS = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true
    },
    RollNo: {
        type: String,
        required: true
    },
    BirthDate: {
        type: Date,
        required: true
    },
    Division: {
        type: Number,
        required: true
    },
    Subject: {
        type: [String],
        required: true
    },
    Marks: {
        type: [Number],
        required: true
    }
}, { timestamps: true });
exports.StudentTS = (0, mongoose_1.model)('StudentTS', studentSchema);
//# sourceMappingURL=studentModels.js.map