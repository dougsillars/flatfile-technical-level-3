import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { SectionEntity } from './Section'

@Entity({ name: 'cards' })
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ name: 'section_id' })
  section_id: number

  @ManyToOne(() => SectionEntity, (section) => section.cards)
  @JoinColumn({ name: 'section_id' })
  section: SectionEntity

  @Column()
  image1: string
  @Column()
  image2: string
  @Column()
  image3: string
}
