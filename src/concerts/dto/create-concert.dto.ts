import { IsOptional, IsString } from "class-validator";

export class CreateConcertDto {
  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  time: string;

  @IsString()
  venue: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  guest: string;
}
