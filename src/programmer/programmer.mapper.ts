import { Injectable } from '@nestjs/common';
import { CreateProgrammerDto } from './dto/create-programer.dto';
import { Programmer } from './programer.entity';

@Injectable()
export class ProgrammerMapper {
    createDtoToEntity(createProgrammerDto: CreateProgrammerDto): Programmer {
        const programmer = new Programmer();
        programmer.name = createProgrammerDto.name;
        programmer.email = createProgrammerDto.email;
        programmer.age = createProgrammerDto.age;
        programmer.role = createProgrammerDto.role;
        programmer.nickName = createProgrammerDto.nickName;
        programmer.numberOfCompanies = createProgrammerDto.history?.length || 0;
        programmer.yearsOfExperience = createProgrammerDto.history
            ? createProgrammerDto.history.reduce((totalMonths, entry) => totalMonths + entry.months, 0) / 12
            : 0;
        return programmer;
    }
}
