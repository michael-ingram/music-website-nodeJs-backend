import { Column } from "typeorm";
import { IsString } from "class-validator";

export class UpdateConcertDto {
  @IsString()
  date: string;

  @IsString()
  time: string;

  @IsString()
  venue: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  guest: string;
}
