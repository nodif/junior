import { Injectable } from '@nestjs/common';
import { Prisma, Type } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoffeesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createCoffeeDto: Prisma.CoffeeCreateInput) {
    return this.databaseService.coffee.create({
      data: createCoffeeDto
    })
  }

  async findAll(type?: Type) {
    if (type) return this.databaseService.coffee.findMany({
      where: {
        type,
      }
    })
    return this.databaseService.coffee.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.coffee.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateCoffeeDto: Prisma.CoffeeUpdateInput) {
    return this.databaseService.coffee.update({
      where: {
        id,
      },
      data: updateCoffeeDto,
    })
  }

  async delete(id: number) {
    return this.databaseService.coffee.delete({
      where: {
        id,
      }
    })
  }
}
