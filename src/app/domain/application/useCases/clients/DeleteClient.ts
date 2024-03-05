import { Either, left, right } from '@/app/core/either'
import { NotFoundError } from '../errors/NotFoundError'
import { ClientRepository } from '../../repositories/clientRepository'

interface DeleteClientUseCaseProps {
  id: string
}
type DeleteClientUseCaseResponse = Either<NotFoundError, {}>

export class DeleteClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    id,
  }: DeleteClientUseCaseProps): Promise<DeleteClientUseCaseResponse> {
    const client = await this.clientRepository.findById(id)

    if (!client) {
      return left(new NotFoundError())
    }

    await this.clientRepository.delete(client)

    return right({})
  }
}
