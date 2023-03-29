import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  
  const config = new DocumentBuilder()
  .setTitle('Dao Terminal')
  .setDescription('Participate in discussions and snapshot votes')
  .setVersion('0.1')
  .build();
  // app.post()
  const document = SwaggerModule.createDocument(app, config);  
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
  console.log("db connection successfull!")
}
bootstrap();
