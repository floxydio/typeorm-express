import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm'

@Entity()
export class News extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    title?: string

    @Column()
    description?: string

    @Column({type: 'timestamptz'})
    created?: Date
}