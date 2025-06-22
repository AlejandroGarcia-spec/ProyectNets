import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
