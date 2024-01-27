import {IsArray, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Role} from "../enum/role.enum";
import {Type} from "class-transformer";

export class HistoryEntry {
    @IsString()
    company: string;

    @IsNumber()
    months: number;
}


export class CreateProgrammerDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsNumber()
    readonly age: number;

    @IsNotEmpty()
    @IsEnum(Role)
    readonly role: Role;

    @IsOptional()
    @IsString()
    readonly nickName?: string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HistoryEntry)
    readonly history?: HistoryEntry[];
}
