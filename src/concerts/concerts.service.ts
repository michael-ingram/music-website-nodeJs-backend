import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConcertsRepository } from "./concerts.repository";
import { Concert } from "./concert.entity";
import { CreateConcertDto } from "./dto/create-concert.dto";

@Injectable()
export class ConcertsService {

  constructor(
    @InjectRepository(ConcertsRepository)
    private concertsRepository: ConcertsRepository,
  ) {}

  getConcerts(): Promise<Concert[]> {
    return this.concertsRepository.find();
  }

  async getConcertById(id: string): Promise<Concert> {
    const found = await this.concertsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  createConcert(createConcertDto: CreateConcertDto): Promise<Concert> {
    return this.concertsRepository.createConcert(createConcertDto);
  }

  async deleteConcert(id: string): Promise<void> {
    const result = await this.concertsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateConcert(
    id: string,
    date: string,
    time: string,
    venue: string,
    city: string,
    state: string,
    guest: string,
  ): Promise<Concert> {
    const concert = await this.getConcertById(id);

    concert.date = date;
    concert.time = time;
    concert.venue = venue;
    concert.city = city;
    concert.state = state;
    concert.guest = guest;
    await this.concertsRepository.save(concert);

    return concert;
  }
}
