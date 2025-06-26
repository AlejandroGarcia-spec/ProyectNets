import { Position } from "src/position/entities/position.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    edad: number;
   
    @Column({unique: true})
    email: string;
   
    @Column({default: true})
    status: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @ManyToOne(()=>Position,(position)=>position.employees)
    position: Position;
}
