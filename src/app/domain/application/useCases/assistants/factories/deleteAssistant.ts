import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { DeleteAssistantUseCase } from '../DeleteAssistant'

export const deleteAssistant = () => {
  return new DeleteAssistantUseCase(new AssistantsRepositoryPrisma())
}
