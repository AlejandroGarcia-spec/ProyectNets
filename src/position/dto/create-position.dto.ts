import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePositionDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    @IsNumber()
    salary: number;
    


}
