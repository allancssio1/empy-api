import { Either, left, right } from '@/app/core/either'
import { Assistant } from '../../../enterprise/entities/Assistant'
import { AssistantRepository } from '../../repositories/assistantRepository'
import { NotFoundError } from '../errors/NotFoundError'

export interface EditAssistantUseCaseProps {
  id: string
  name: string
  email: string
  phone: string
}

type EditAssistantUseCaseResponse = Either<
  NotFoundError,
  {
    assistant: Assistant
  }
>

export class EditAssistantUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute({
    id,
    name,
    email,
    phone,
  }: EditAssistantUseCaseProps): Promise<EditAssistantUseCaseResponse> {
    const assistant = await this.assistantRepository.findById(id)

    if (!assistant) return left(new NotFoundError())

    assistant.name = name
    assistant.email = email
    assistant.phone = phone

    await this.assistantRepository.update(assistant)

    return right({ assistant })
  }
}
