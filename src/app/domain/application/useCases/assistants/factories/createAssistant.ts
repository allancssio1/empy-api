import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { CreateAssistantUseCase } from '@/app/domain/application/useCases/assistants/CreateAssistant'

export const createAssistant = () => {
  const assistanteRepository = new AssistantsRepositoryPrisma()
  const createAssistant = new CreateAssistantUseCase(assistanteRepository)

  return createAssistant
}
