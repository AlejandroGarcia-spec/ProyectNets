// src/employees/dto/update-employee.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max } from 'class-validator';
import { Position } from 'src/position/entities/position.entity';

export class UpdateEmployeeDto {
        @Length(3, 20)
        @IsString()
        @IsOptional()
        nombre: string;
        @Length(3, 30)
        @IsString()
        @IsOptional()
        apellido: string;
        @Length(3, 30) 
        @IsString()
        @IsOptional()
        password: string;
        @Length(3, 30)
        @IsString()
        @IsOptional()
        username: string;
    
        @IsNumber()
        @IsOptional()
        @Max(100)
        edad: number;
        
        @IsOptional()
        @IsNumber()
        position: Position;
}
