import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from '@app/common/config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // ถ้า config ไม่ใช่ dev mode จะสามารถดู Swagger UI ได้ที่
  // http://localhost:3000/docs

  if (!configService.isProduction()) {
    const config = new DocumentBuilder()
      .setTitle(configService.getAppName())
      .setDescription('API application with NestJS get user on mysql database')
      .setVersion(configService.getAppVersion())
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(parseInt(configService.getAppListenPort()));
}
bootstrap();
