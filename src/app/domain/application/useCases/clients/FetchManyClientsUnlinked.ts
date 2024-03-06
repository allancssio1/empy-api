import { Either, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'

type FetchManyClientsUnlinkedUseCaseResponse = Either<
  null,
  {
    clients: Client[]
  }
>

export class FetchManyClientsUnlinkedUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(): Promise<FetchManyClientsUnlinkedUseCaseResponse> {
    const clients = await this.clientRepository.findManyClientsUnlinked()

    return right({ clients })
  }
}
