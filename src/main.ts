import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const host = config.get("HOST");
  const port = config.get("PORT");
  await app.listen(port || 3003, () => {
    console.log(`Server has been connected to ${host + port}`);
  });
}
bootstrap();
