import {Controller, Get, Post, Body, Patch, Param, Delete, Query, Ip, ParseIntPipe} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Prisma, Type } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler'
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@SkipThrottle()
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }
  private readonly logger = new MyLoggerService(CoffeesController.name)
  
  @Post()
  create(@Body() createCoffeeDto: Prisma.CoffeeCreateInput) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Ip() ip: string, @Query('type') type?: Type) {
    this.logger.log(`Request for ALL Coffees\t${ip}`, CoffeesController.name)
    return this.coffeesService.findAll(type);
  }

  @Throttle({ short: { ttl: 1000, limit: 1 }})
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCoffeeDto: Prisma.CoffeeUpdateInput) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.delete(id);
  }
}
