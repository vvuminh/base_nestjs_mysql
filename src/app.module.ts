import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule } from 'nestjs-console';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
// import { UsersModule } from './modules/users/users.module';
// import { AuthMiddleware } from './modules/auth/auth.middleware';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthModule } from './modules/auth/auth.module';
// import { AdminModule } from './modules/admin/admin.module';
// import { LoggingModule } from './shared/loggers/logger.module';
// import { Web3Module } from './modules/web3/web3.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // MailerModule.forRoot({
    //   transport: {
    //     host: process.env.MAIL_HOST,
    //     port: process.env.MAIL_PORT,
    //     secure: true,
    //     auth: {
    //       user: process.env.MAILDEV_INCOMING_USER,
    //       pass: process.env.MAILDEV_INCOMING_PASS,
    //     },
    //     debug: true,
    //   },
    // }),
    // UsersModule,
    // JwtModule.register({}),
    // AuthModule,
    // AdminModule,
    // LoggingModule,
    // Web3Module,
    ConsoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer;
    // .apply(AuthMiddleware)
    // .forRoutes({ path: '/admin/*', method: RequestMethod.ALL });
    // consumer
    //   .apply(UserMiddleware)
    //   .forRoutes({ path: 'users', method: RequestMethod.PUT });
  }
}
