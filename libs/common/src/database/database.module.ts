import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@app/common/config/config.service';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
})
export class DatabaseModule {}
