import { Assistant } from '../../enterprise/entities/Assistant'
import { AssistantRepository } from '../repositories/assistantRepository'

interface EditAssistantUseCaseProps {
  id: string
  name: string
  email: string
  phone: string
}

interface EditAssistantUseCaseResponse {
  assistant: Assistant
}

export class EditAssistantUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute({
    id,
    name,
    email,
    phone,
  }: EditAssistantUseCaseProps): Promise<EditAssistantUseCaseResponse> {
    const assistant = await this.assistantRepository.findById(id)

    if (!assistant) throw new Error('Assistant not found')

    assistant.name = name
    assistant.email = email
    assistant.phone = phone

    await this.assistantRepository.update(assistant)

    return { assistant }
  }
}
