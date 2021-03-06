/*
  What: This is used to initialize the Event table in the HikEasy database
  Who: Tsang Tsz Kin Brian 1155126813
  Where: backend database
  Why: to construct the table for storing events
  How: use typeorm to connect to mysql database, and set up table for events
*/

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { User } from './User';
import { Trail } from './Trail';
import { Photo } from './Photo';
import { Chat } from './Chat';

@Entity()
export class Event {
  //attribute for the event table
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    default: '',
  })
  name!: string;

  @Column({
    default: '',
  })
  description!: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  time!: Date;

  @OneToMany(() => Photo, (photo) => photo.event)
  photos!: Photo[];

  @CreateDateColumn()
  createdAt!: Date;

  //one event can have one trail
  @ManyToOne(() => Trail, (trail) => trail.events, { eager: true })
  trail: Trail | undefined;

  //one event can have multiple chat
  @OneToMany(() => Chat, (chat) => chat.event)
  chats!: Chat[];

  //one event can have multiple participants
  @ManyToMany(() => User, (user) => user.events, { eager: true })
  @JoinTable()
  participants!: User[];
}
