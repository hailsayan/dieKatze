import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ProfileModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [User],
      synchronize: true, //shouldn't be used in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
