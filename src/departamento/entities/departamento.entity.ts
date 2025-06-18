import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    ubicacion: string;
    @Column()
    num_empleados: number;
    @Column({ default: true })
    status: boolean
    @CreateDateColumn()
    createdAt: Date;
}
