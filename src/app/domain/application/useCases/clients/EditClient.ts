import { Either, left, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'
import { NotFoundError } from '../errors/NotFoundError'

export interface EditClientUseCaseProps {
  id: string
  name: string
  network: string
}

type EditClientUseCaseResponse = Either<
  NotFoundError,
  {
    client: Client
  }
>

export class EditClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    id,
    name,
    network,
  }: EditClientUseCaseProps): Promise<EditClientUseCaseResponse> {
    const client = await this.clientRepository.findById(id)

    if (!client) return left(new NotFoundError())

    client.name = name
    client.network = network

    await this.clientRepository.update(client)

    return right({ client })
  }
}
