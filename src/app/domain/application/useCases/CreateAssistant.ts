import { Either, left, right } from '@/app/core/either'
import { Assistant } from '../../enterprise/entities/Assistant'
import { AssistantRepository } from '../repositories/assistantRepository'
import { AssistanteAlreadyExistsError } from './errors/AssistantAlreadyExistsError'

interface CreateAssistantUseCaseProps {
  name: string
  email: string
  phone: string
}

type CreateAssistantUseCaseResponse = Either<
  AssistanteAlreadyExistsError,
  { assistant: Assistant }
>

export class CreateAssistantUseCase {
  constructor(private assistantRepository: AssistantRepository) {}

  async execute({
    name,
    email,
    phone,
  }: CreateAssistantUseCaseProps): Promise<CreateAssistantUseCaseResponse> {
    const assistantAlreadyExists =
      await this.assistantRepository.findByEmail(email)

    if (assistantAlreadyExists) return left(new AssistanteAlreadyExistsError())

    const assistant = Assistant.create({
      name,
      email,
      phone: phone.replace(/\D/g, ''),
    })

    await this.assistantRepository.create(assistant)

    return right({ assistant })
  }
}
