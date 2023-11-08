import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'tinyint',
    nullable: true,
    default: 1,
  })
  enabled: number;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'password',
    length: 60,
    nullable: true,
    default: '',
  })
  password: string;

  @Column({
    type: 'varchar',
    length: '45',
    nullable: true,
    default: 1,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: '45',
    nullable: true,
    default: 1,
  })
  last_name: string;

  // @Column({
  //   type: 'datetime',
  //   nullable: true,
  //   default: 'CURRENT_TIMESTAMP',
  // })
  // date_create: string;

  // @Column({
  //   type: 'datetime',
  //   nullable: true,
  //   default: '',
  //   onUpdate: 'CURRENT_TIMESTAMP',
  // })
  // date_update: string;
}
