import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  updated_at: Date;
}
