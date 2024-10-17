import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app";

const FALLBACK_PORT = 4000;

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(FALLBACK_PORT);
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${FALLBACK_PORT}`);
}
