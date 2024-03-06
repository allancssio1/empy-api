import { Either, left, right } from '@/app/core/either'
import { Client } from '../../../enterprise/entities/Client'
import { ClientRepository } from '../../repositories/clientRepository'
import { ClientAlreadyExistsError } from '../errors/ClientAlreadyExistsError'

export interface CreateClientUseCaseProps {
  name: string
  code: string
  network: string
}

type CreateClientUseCaseResponse = Either<
  ClientAlreadyExistsError,
  { client: Client }
>

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    name,
    code,
    network,
  }: CreateClientUseCaseProps): Promise<CreateClientUseCaseResponse> {
    const clientAlreadyExists = await this.clientRepository.findByCode(code)

    if (clientAlreadyExists) return left(new ClientAlreadyExistsError())

    const client = Client.create({
      name,
      code,
      network,
    })

    await this.clientRepository.create(client)

    return right({ client })
  }
}
