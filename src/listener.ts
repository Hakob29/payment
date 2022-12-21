import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen()
    .then(() => {
      console.log("Microservice is listening...")
    })
    .catch((err) => {
      console.log(err)
    })
}
bootstrap();