import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CardEntity } from '../entities/Card'
import { Repository } from 'typeorm'

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardsRepository: Repository<CardEntity>
  ) {}

  create({ sectionId, title, description }: { sectionId: number; title: string, description: string }): Promise<CardEntity> {
    let card = new CardEntity()
    card.title = title
    card.description = description
    card.section_id = sectionId
    return this.cardsRepository.save(card)
  }
}
