import { Either, left, right } from '@/app/core/either'
import { NotFoundError } from '../errors/NotFoundError'
import { AssistantRepository } from '../../repositories/assistantRepository'

interface DeleteUseCaseProps {
  id: string
}
type DeleteUseCaseResponse = Either<NotFoundError, {}>

export class DeleteUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute({ id }: DeleteUseCaseProps): Promise<DeleteUseCaseResponse> {
    const assistant = await this.assistantRepository.findById(id)

    if (!assistant) {
      return left(new NotFoundError())
    }

    await this.assistantRepository.delete(assistant)

    return right({})
  }
}
