import { Assistant } from '../../enterprise/entities/Assistant'
import { AssistantRepository } from '../repositories/assistantRepository'

interface FetchManyAssistantsUseCaseResponse {
  assistants: Assistant[]
}

export class FetchManyAssistantsUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute(): Promise<FetchManyAssistantsUseCaseResponse> {
    const assistants = await this.assistantRepository.findMany()

    return { assistants }
  }
}
