import { EntityRepository, Repository } from "typeorm";
import { Concert } from './concert.entity';
import { CreateConcertDto } from './dto/create-concert.dto';

@EntityRepository(Concert)
export class ConcertsRepository extends Repository<Concert> {
  async createConcert(createConcertDto: CreateConcertDto): Promise<Concert> {
    const { date, time, venue, city, state, guest } = createConcertDto;

    const concert = this.create({
      date,
      time,
      venue,
      city,
      state,
      guest,
    });

    await this.save(concert);
    return concert;
  }

}
