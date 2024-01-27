import {Controller, Post, Body, ValidationPipe, Get} from '@nestjs/common';
import { CreateProgrammerDto } from './dto/create-programer.dto';
import { ProgrammerService } from './programmer.service';
import {Programmer} from "./programer.entity";

@Controller('programmers')
export class ProgrammerController {
    constructor(private readonly programmerService: ProgrammerService) {}

    @Post()
    createProgrammer(@Body(ValidationPipe) createProgrammerDto: CreateProgrammerDto) {
        return this.programmerService.createProgrammer(createProgrammerDto);
    }

    @Get()
    findAll(): Promise<Programmer[]> {
        return this.programmerService.findAll();
    }
}
