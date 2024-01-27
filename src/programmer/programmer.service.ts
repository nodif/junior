import { Injectable } from '@nestjs/common';
import { CreateProgrammerDto } from './dto/create-programer.dto';
import { Programmer } from './programer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ProgrammerMapper} from "./programmer.mapper";

@Injectable()
export class ProgrammerService {
    constructor(
        @InjectRepository(Programmer)
        private readonly programmerRepository: Repository<Programmer>,
        private readonly programmerMapper: ProgrammerMapper, // Inject the mapper
    ) {}

    async createProgrammer(createProgrammerDto: CreateProgrammerDto): Promise<Programmer> {
        const programmer = this.programmerMapper.createDtoToEntity(createProgrammerDto);
        return this.programmerRepository.save(programmer);
    }

    async findAll(): Promise<Programmer[]> {
        return this.programmerRepository.find();
    }
}
