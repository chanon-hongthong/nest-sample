import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'tinyint',
    nullable: true,
    default: false,
  })
  enabled: number;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
    default: '',
  })
  username: string;

  @Exclude({ toPlainOnly: true })
  @Column({
    select: false,
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
    default: '',
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: '45',
    nullable: true,
    default: '',
  })
  last_name: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  date_create: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  date_update: string;
}
