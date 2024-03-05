import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { FetchManyAssistantsUseCase } from '../FetchManyAssistants'

export const listAssistants = () => {
  const assistanteRepository = new AssistantsRepositoryPrisma()
  const listAssistants = new FetchManyAssistantsUseCase(assistanteRepository)

  return listAssistants
}
