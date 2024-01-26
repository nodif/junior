import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(): Promise<Coffee[]> {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: Partial<Coffee>): Promise<Coffee> {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCoffeeDto: Partial<Coffee>): Promise<Coffee> {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.coffeesService.delete(id);
  }
}
