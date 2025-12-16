import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configurar CORS
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3001',
      'http://localhost:3000',
      'https://blade-billing-frontend.vercel.app',
      /\.vercel\.app$/,
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  // Configurar prefixo global da API
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`\n⚡ Blade Billing API`);
  console.log(`⚡ Running on: http://localhost:${port}`);
  console.log(`⚡ API Prefix: /api`);
  console.log(`⚡ Health check: http://localhost:${port}/api/health`);
  console.log(`⚡ Auth endpoints:`);
  console.log(`   - POST /api/auth/register`);
  console.log(`   - POST /api/auth/login\n`);
}
bootstrap();
