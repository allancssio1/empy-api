import { Either, left, right } from '@/app/core/either'
import { AssistantRepository } from '../../repositories/assistantRepository'
import { ClientRepository } from '../../repositories/clientRepository'
import { NotFoundError } from '../errors/NotFoundError'
import { Client } from '@/app/domain/enterprise/entities/Client'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

export interface LinkUnlinkClientUseCaseProps {
  assistantId: string
  clientId: string
}

type LinkUnlinkClientUseCaseResponse = Either<
  NotFoundError,
  {
    client: Client
  }
>

export class LinkUnlinkClientUseCase {
  constructor(
    private clientsRepository: ClientRepository,
    private assistantsRepository: AssistantRepository,
  ) {}

  async execute({
    assistantId,
    clientId,
  }: LinkUnlinkClientUseCaseProps): Promise<LinkUnlinkClientUseCaseResponse> {
    const assistant = await this.assistantsRepository.findById(assistantId)

    if (!assistant) return left(new NotFoundError())

    const client = await this.clientsRepository.findById(clientId)

    if (!client) return left(new NotFoundError())

    client.assistantId =
      client.assistantId instanceof UniqueEntityId ? undefined : assistant.id

    await this.clientsRepository.update(client)

    return right({ client })
  }
}
