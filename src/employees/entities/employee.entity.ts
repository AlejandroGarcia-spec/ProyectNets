import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    edad: number;
    @Column()
    puesto: string;
    @Column({unique: true})
    email: string;
    @Column()
    sueldo: number;
    @Column({default: true})
    status: boolean;
    @CreateDateColumn()
    createdAt: Date;
}
