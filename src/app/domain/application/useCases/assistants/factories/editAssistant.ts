import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { EditAssistantUseCase } from '@/app/domain/application/useCases/assistants/EditAssistant'

export const editAssistant = () => {
  const assistanteRepository = new AssistantsRepositoryPrisma()
  const editAssistant = new EditAssistantUseCase(assistanteRepository)

  return editAssistant
}
