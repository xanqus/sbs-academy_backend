import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StudytimeController } from './studytime/studytime.controller';
import { StudytimeService } from './studytime/studytime.service';
import { StudytimeApiModule } from './studytime-api/studytime-api.module';
import { UserApiModule } from './user-api/user-api.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    StudytimeApiModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.USER_NAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'sbs-academy_backend',
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    StudytimeApiModule,
    UserApiModule,
    UserModule,
  ],
  controllers: [StudytimeController],
  providers: [StudytimeService],
})
export class AppModule {}
