// src/app.module.ts
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Coffee} from './coffees/coffee.entity';
import {CoffeesController} from './coffees/coffees.controller';
import {CoffeesService} from './coffees/coffees.service';
import {ThrottlerGuard, ThrottlerModule} from '@nestjs/throttler';
import {MyLoggerModule} from './my-logger/my-logger.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {APP_GUARD} from '@nestjs/core';
import {Programmer} from "./programmer/programer.entity";
import {ProgrammerController} from "./programmer/programmer.controller";
import {ProgrammerService} from "./programmer/programmer.service";
import {ProgrammerMapper} from "./programmer/programmer.mapper";
import {ProgrammerModule} from "./programmer/programmer.module";

@Module({
  imports: [ProgrammerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      schema: 'test',
      entities: [Coffee, Programmer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Coffee, Programmer]),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    MyLoggerModule,
  ],
  controllers: [CoffeesController, AppController],
  providers: [
    CoffeesService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
