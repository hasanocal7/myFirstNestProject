import * as mongoose from 'mongoose';

export const EmployeesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    stillEmployee: {
      type: Boolean,
      required: true,
    },
  },
  { collection: 'Employee' },
);

export interface IEmployees extends mongoose.Document {
  name: string;
  age: number;
  stillEmployee: boolean;
}
