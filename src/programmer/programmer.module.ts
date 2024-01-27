import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programmer } from './programer.entity';
import { ProgrammerController } from './programmer.controller';
import { ProgrammerService } from './programmer.service';
import {ProgrammerMapper} from "./programmer.mapper"; // Ensure this import is correct

@Module({
    imports: [TypeOrmModule.forFeature([Programmer])],
    controllers: [ProgrammerController],
    providers: [ProgrammerService, ProgrammerMapper], // Include ProgrammerRepository here
})
export class ProgrammerModule {}
