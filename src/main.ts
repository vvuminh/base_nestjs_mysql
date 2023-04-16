// eslint-disable-next-line @typescript-eslint/no-var-requires
const env = require('dotenv').config({ path: `.env` });
console.log('ENV', env);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
