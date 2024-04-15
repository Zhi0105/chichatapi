import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RootModule } from './root/root.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    RootModule, 
    AuthModule, 
    PrismaModule, 
    UserModule
  ],
})
export class AppModule {}
