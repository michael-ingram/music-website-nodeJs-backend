import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ConcertsService } from "./concerts.service";
import { Concert } from "./concert.entity";
import { CreateConcertDto } from "./dto/create-concert.dto";
import { UpdateConcertDto } from "./dto/update-concert.dto";

@Controller("concerts")
export class ConcertsController {

  constructor(private concertService: ConcertsService) {
  }

  @Get()
  getConcerts(): Promise<Concert[]> {
    return this.concertService.getConcerts();
  }

  @Get("/:id")
  getConcertById(@Param("id") id: string): Promise<Concert> {
    return this.concertService.getConcertById(id);
  }

  @Post()
  createConcert(@Body() createConcertDto: CreateConcertDto): Promise<Concert> {
    return this.concertService.createConcert(createConcertDto);
  }

  @Delete("/:id")
  deleteConcert(@Param("id") id: string): Promise<void> {
    return this.concertService.deleteConcert(id);
  }

  @Patch("/:id/updatedConcert")
  updateConcert(
    @Param("id") id: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ): Promise<Concert> {
    const { date, time, venue, city, state, guest } = updateConcertDto;
    return this.concertService.updateConcert(
      id,
      date,
      time,
      venue,
      city,
      state,
      guest,
    );
  }
}

