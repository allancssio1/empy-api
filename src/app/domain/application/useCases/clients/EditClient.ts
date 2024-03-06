import { Either, left, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'
import { NotFoundError } from '../errors/NotFoundError'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

export interface EditClientUseCaseProps {
  id: string
  name: string
  network: string
  assistantId?: string
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
    assistantId,
  }: EditClientUseCaseProps): Promise<EditClientUseCaseResponse> {
    const client = await this.clientRepository.findById(id)

    if (!client) return left(new NotFoundError())

    client.name = name
    client.network = network
    client.assistantId = assistantId
      ? new UniqueEntityId(assistantId)
      : undefined

    await this.clientRepository.update(client)

    return right({ client })
  }
}
