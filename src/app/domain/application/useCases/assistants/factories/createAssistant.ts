import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import {
  CreateAssistantUseCase,
  CreateAssistantUseCaseProps,
} from '@/app/domain/application/useCases/assistants/CreateAssistant'

export const createAssistant = (data: CreateAssistantUseCaseProps) => {
  return new CreateAssistantUseCase(new AssistantsRepositoryPrisma()).execute(
    data,
  )
}
