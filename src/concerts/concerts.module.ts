import { Module } from '@nestjs/common';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConcertsRepository } from "./concerts.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ConcertsRepository])],
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
