import { IsBoolean, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateDepartamentoDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  ubicacion: string;

  @IsNumber({}, { message: 'num_empleados debe ser un número válido' })
  @IsNotEmpty()
  num_empleados: number;


}
