import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEmployees } from './employees.model';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employees')
    private readonly employeesModel: Model<IEmployees>,
  ) {}

  async getEmployees() {
    const employees = await this.employeesModel.find();
    return employees;
  }

  async getEmployee(id: string) {
    const employee = await this.employeesModel.findById(id);
    return employee;
  }

  async insertEmployee(payload: CreateEmployeeDto) {
    const createdUser = new this.employeesModel(payload);
    const res = await createdUser.save();
    return res;
  }

  async updateEmployee(id: string, payload: UpdateEmployeeDto) {
    const updatedEmployee = await this.employeesModel.findByIdAndUpdate(
      id,
      payload,
      { new: true },
    );
    if (!updatedEmployee) throw new NotFoundException('User not found');
    return updatedEmployee;
  }

  async deleteEmployee(id: string) {
    const deletedUser = await this.employeesModel.findByIdAndDelete(id);
    return deletedUser.id;
  }
}
