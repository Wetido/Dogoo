import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from "src/users/users.module";
import { join } from "path"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'playr',
      entities: [join(__dirname, "./**/*.entity{.ts,.js}")],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule
  ],


})
export class AppModule {}