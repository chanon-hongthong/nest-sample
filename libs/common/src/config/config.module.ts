import { Module } from '@nestjs/common';
import { configService } from '@app/common/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
})
export class ConfigModule {}
