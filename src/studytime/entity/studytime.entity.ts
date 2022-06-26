import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('StudyTime')
export class StudyTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  discordId: number;

  @Column('float')
  videoTime: number;

  @Column('int')
  youtubeWatchCount: number;

  @Column('int')
  baekjoonTime: number;

  @Column('int')
  blogUploadCount: number;
}
