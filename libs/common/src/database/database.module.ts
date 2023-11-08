import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/common/config/config.module';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [ConfigModule],
})
export class DatabaseModule {}
