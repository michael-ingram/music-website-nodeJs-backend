import { Module } from '@nestjs/common';
import { ConcertsModule } from './concerts/concerts.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConcertsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'concerts',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
