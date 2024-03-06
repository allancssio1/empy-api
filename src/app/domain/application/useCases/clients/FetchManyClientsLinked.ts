import { Either, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'

export interface FetchManyClientsLinkedUseCaseProps {
  assistantId: string
}

type FetchManyClientsLinkedUseCaseResponse = Either<
  null,
  {
    clients: Client[]
  }
>

export class FetchManyClientsLinkedUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    assistantId,
  }: FetchManyClientsLinkedUseCaseProps): Promise<FetchManyClientsLinkedUseCaseResponse> {
    const clients =
      await this.clientRepository.findManyClientsLinked(assistantId)

    return right({ clients })
  }
}
