import { Either, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'

export interface FetchManyClientsUseCaseProps {
  assistantId: string
}

type FetchManyClientsUseCaseResponse = Either<
  null,
  {
    clients: Client[]
  }
>

export class FetchManyClientsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    assistantId,
  }: FetchManyClientsUseCaseProps): Promise<FetchManyClientsUseCaseResponse> {
    const clients =
      await this.clientRepository.findManyClientsLinked(assistantId)

    return right({ clients })
  }
}
