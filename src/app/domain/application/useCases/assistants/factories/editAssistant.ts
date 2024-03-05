import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { EditAssistantUseCase } from '@/app/domain/application/useCases/assistants/EditAssistant'

export const editAssistant = () => {
  return new EditAssistantUseCase(new AssistantsRepositoryPrisma())
}
