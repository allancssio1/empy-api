import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { CreateAssistantUseCase } from '@/app/domain/application/useCases/assistants/CreateAssistant'

export const createAssistant = () => {
  return new CreateAssistantUseCase(new AssistantsRepositoryPrisma())
}
