import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  studentName: string;

  @Column({
    length: 100,
  })
  lectureID: string;

  @Column({ type: 'int', unique: true })
  discordID: number;
}
