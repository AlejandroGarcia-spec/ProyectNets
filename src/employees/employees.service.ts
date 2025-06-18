import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  @InjectRepository(Employee)
  private _EmpleadoRepo:Repository<Employee>;
  
  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = this._EmpleadoRepo.create(createEmployeeDto)
    await this._EmpleadoRepo.save(newEmployee)
    return newEmployee

  }

  async findAll() {
    return await this._EmpleadoRepo.find();
  }

  async findEmploye(id: number) {
    const employee = await this._EmpleadoRepo.findOneBy({id});
    if (!employee) {
      throw new NotFoundException(`empleado con el id${id} no encontrado`);
    }
    return employee;
  }

  async updateEmploye(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this._EmpleadoRepo.findOneBy({ id })
    if (!employee) {
      throw new NotFoundException(`empleado con el id ${id} no encontrado`);
    }
    const updatedEmployee = this._EmpleadoRepo.merge(employee, updateEmployeeDto);
    return await this._EmpleadoRepo.save(updatedEmployee);
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
