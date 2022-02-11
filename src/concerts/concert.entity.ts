import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Concert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  venue: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  guest: string;
}
