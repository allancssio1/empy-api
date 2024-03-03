import { Assistant } from '../../enterprise/entities/Assistant'
import { AssistantRepository } from '../repositories/assistantRepository'

interface CreateAssistantUseCaseProps {
  name: string
  email: string
  phone: string
}

interface CreateAssistantUseCaseResponse {
  assistant: Assistant
}

export class CreateAssistantUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute({
    name,
    email,
    phone,
  }: CreateAssistantUseCaseProps): Promise<CreateAssistantUseCaseResponse> {
    const assistantAlreadyExists =
      await this.assistantRepository.findByEmail(email)

    if (assistantAlreadyExists) throw new Error('Assistant Already Exists')

    const assistant = Assistant.create({
      name,
      email,
      phone: phone.replace(/\D/g, ''),
    })

    await this.assistantRepository.create(assistant)

    return { assistant }
  }
}
