import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Max } from "class-validator";

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
    sueldo: number;
    @IsString()
    @IsNotEmpty()
    puesto: string;
    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    edad: number;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
