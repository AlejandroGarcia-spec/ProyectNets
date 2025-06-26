import { IsEmail, IsNotEmpty, isNumber, IsNumber, IsString, Length, Max } from "class-validator";
import { Position } from "src/position/entities/position.entity";

export class CreateEmployeeDto {
    @Length(3, 20)
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @Length(3, 30)
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    edad: number;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsNumber()
    position: Position;
    @Length(3, 30)
    @IsString()
    @IsNotEmpty()
    password: string;
    @Length(3, 30)
    @IsString()
    @IsNotEmpty()
    username: string;
    
}
