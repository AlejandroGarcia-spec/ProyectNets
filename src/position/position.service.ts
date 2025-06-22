import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  @InjectRepository(Position)
  private _PositionRepo: Repository<Position>;
  async create(createPositionDto: CreatePositionDto) {
    try {
      const newPosition = this._PositionRepo.create(createPositionDto);
      await this._PositionRepo.save(newPosition);
      return newPosition;
    } catch (error) {
      throw new Error(`Error al crear posición: ${error.message}`);
    }
  }

  findAll() {
    try {
      return this._PositionRepo.find();
    } catch (error) {
      throw new Error(`Error al obtener posiciones: ${error.message}`);
    }
  }
async findOne(id: number) {
  try {
    const position = await this._PositionRepo.findOneBy({ id });
    if (!position) {
      throw new NotFoundException(`Posición con el id ${id} no encontrada`);
    }
    return position;
  } catch (error) {
   
    if (error instanceof NotFoundException) throw error;

    throw new InternalServerErrorException(`Error al buscar posición: ${error.message}`);
  }
}



  async update(id: number, updatePositionDto: UpdatePositionDto) {
      try {
    const employee = await this._PositionRepo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empleado con el id ${id} no encontrado`);
    }
    const updatedEmployee = this._PositionRepo.merge(employee, updatePositionDto);
    return await this._PositionRepo.save(updatedEmployee);
  } catch (error) {
    throw new Error(`Error al actualizar empleado: ${error.message}`);
  }
  }

  async remove(id: number) {
        try {
      const empoyee = await this._PositionRepo.findOneBy({ id });
      if (!empoyee) {
        throw new NotFoundException(`Empleado con el id ${id} no encontrado`);
      }
      await this._PositionRepo.remove(empoyee);
      return { message: `Empleado con el id ${id} eliminado correctamente` };
    } catch (error) {
      throw new InternalServerErrorException(`Error al eliminar empleado: ${error}`);

    }
  }
}
