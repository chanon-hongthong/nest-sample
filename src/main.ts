import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from '@app/common/config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ถ้า config ไม่ใช่ dev mode จะสามารถดู Swagger UI ได้ที่
  // http://localhost:3000/docs

  if (!configService.isProduction()) {
    const config = new DocumentBuilder()
      .setTitle(configService.getAppName())
      .setDescription('API Application')
      .setVersion(configService.getAppVersion())
      // .addTag('api/v1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(parseInt(configService.getAppListenPort()));
}
bootstrap();
