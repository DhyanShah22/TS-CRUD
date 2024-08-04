import {Schema, model, Document} from 'mongoose'

export interface IPost extends Document{
    Name: string;
    RollNo: string;
    BirthDate: Date;
    Division: number;
    Subject: string[];
    Marks: number[];
}

const studentSchema = new Schema<IPost>({
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
}, {timestamps: true})

export const StudentTS = model<IPost>('StudentTS', studentSchema)