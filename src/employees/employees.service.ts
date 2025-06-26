import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
  try {
    const newEmployee = this._EmpleadoRepo.create(createEmployeeDto);
    await this._EmpleadoRepo.save(newEmployee);
    return newEmployee;
  } catch (error) {
    throw new Error(`Error al crear empleado: ${error.message}`);
  }
}

async findAll() {
  try {
    return await this._EmpleadoRepo.find({relations:['position']});
  } catch (error) {
    throw new Error(`Error al obtener empleados: ${error.message}`);
  }
}

async findEmploye(id: number) {
  try {
    const employee = await this._EmpleadoRepo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con el id ${id} no encontrado`);
    }
    return employee;
  } catch (error) {
    throw new Error(`Error al buscar empleado: ${error.message}`);
  }
}

async updateEmploye(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  try {
    const employee = await this._EmpleadoRepo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con el id ${id} no encontrado`);
    }
    const updatedEmployee = this._EmpleadoRepo.merge(employee, updateEmployeeDto);
    return await this._EmpleadoRepo.save(updatedEmployee);
  } catch (error) {
    throw new Error(`Error al actualizar empleado: ${error.message}`);
  }
}

  async remove(id: number) {
    try {
      const empoyee = await this._EmpleadoRepo.findOneBy({ id });
      if (!empoyee) {
        throw new NotFoundException(`Empleado con el id ${id} no encontrado`);
      }
      await this._EmpleadoRepo.remove(empoyee);
      return { message: `Empleado con el id ${id} eliminado correctamente` };
    } catch (error) {
      throw new InternalServerErrorException(`Error al eliminar empleado: ${error}`);
 
    }
  }
}
