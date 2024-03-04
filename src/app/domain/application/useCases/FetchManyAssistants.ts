import { Either, right } from '@/app/core/either'
import { Assistant } from '../../enterprise/entities/Assistant'
import { AssistantRepository } from '../repositories/assistantRepository'

type FetchManyAssistantsUseCaseResponse = Either<
  null,
  {
    assistants: Assistant[]
  }
>

export class FetchManyAssistantsUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute(): Promise<FetchManyAssistantsUseCaseResponse> {
    const assistants = await this.assistantRepository.findMany()

    return right({ assistants })
  }
}
