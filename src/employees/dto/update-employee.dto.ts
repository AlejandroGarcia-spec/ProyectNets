// src/employees/dto/update-employee.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Max } from 'class-validator';
import { Position } from 'src/position/entities/position.entity';

export class UpdateEmployeeDto {
        @Length(3, 20)
        @IsString()
        @IsNotEmpty()
        nombre: string;
        @Length(3, 30)
        @IsString()
        @IsNotEmpty()
        apellido: string;
        @Length(3, 30)
        @IsString()
        @IsNotEmpty()
        password: string;
        @Length(3, 30)
        @IsString()
        @IsNotEmpty()
        username: string;
    
        @IsNumber()
        @IsNotEmpty()
        @Max(100)
        edad: number;
        
        @IsNotEmpty()
        @IsNumber()
        position: Position;
}
