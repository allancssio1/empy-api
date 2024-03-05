import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { FetchManyAssistantsUseCase } from '../FetchManyAssistants'

export const listAssistants = () => {
  return new FetchManyAssistantsUseCase(new AssistantsRepositoryPrisma())
}
