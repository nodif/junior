import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
      @InjectRepository(Coffee)
      private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  findOne(id: number): Promise<Coffee> {
    return this.coffeeRepository.findOneBy({id});
  }

  create(createCoffeeDto: Partial<Coffee>): Promise<Coffee> {
    const newCoffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(newCoffee);
  }

  update(id: number, updateCoffeeDto: Partial<Coffee>): Promise<Coffee> {
    return this.coffeeRepository.save({ id, ...updateCoffeeDto });
  }

  async delete(id: number): Promise<void> {
    await this.coffeeRepository.delete(id);
  }
}
