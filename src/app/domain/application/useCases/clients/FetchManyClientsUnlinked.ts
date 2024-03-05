import { Either, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'

type FetchManyClientsUseCaseResponse = Either<
  null,
  {
    clients: Client[]
  }
>

export class FetchManyClientsUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(): Promise<FetchManyClientsUseCaseResponse> {
    const clients = await this.clientRepository.findManyClientsUnlinked()

    return right({ clients })
  }
}
