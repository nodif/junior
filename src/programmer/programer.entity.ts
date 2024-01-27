import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {IsOptional} from "class-validator";

@Entity()
export class Programmer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column({
        type: 'enum',
        enum: ['JUNIOR', 'MID-PROGRAMMER', 'SENIOR'],
    })
    role: string;

    @Column()
    @IsOptional()
    nickName?: string;

    @Column({ type: 'double precision' })
    yearsOfExperience: number;

    @Column()
    numberOfCompanies: number;
}
