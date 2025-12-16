import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para frontend
  app.enableCors({
    origin: [
      'http://localhost:3001',
      'https://blade-billing-frontend.vercel.app',
      'https://blade-billing-frontend-*.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  await app.listen(3000);
  console.log(`⚡ Application is running on: http://localhost:3000`);
  console.log(`⚡ CORS habilitado para frontend`);
}
bootstrap();