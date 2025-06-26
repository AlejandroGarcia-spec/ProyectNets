import { Employee } from "src/employees/entities/employee.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Position {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column() 
    salary: number;
    @Column({default: true})
    Is_active: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @OneToMany(()=>Employee, (employee) => employee.position)
    employees: Employee[];

}
