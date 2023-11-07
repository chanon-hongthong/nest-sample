import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
