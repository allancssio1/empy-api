import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { DeleteAssistantUseCase } from '../DeleteAssistant'

export const deleteAssistant = () => {
  const assitanteRepository = new AssistantsRepositoryPrisma()
  const deleteAssistant = new DeleteAssistantUseCase(assitanteRepository)
  return deleteAssistant
}
