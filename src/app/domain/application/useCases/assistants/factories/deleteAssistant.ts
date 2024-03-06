import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import { DeleteAssistantUseCase, DeleteUseCaseProps } from '../DeleteAssistant'

export const deleteAssistant = ({ id }: DeleteUseCaseProps) => {
  return new DeleteAssistantUseCase(new AssistantsRepositoryPrisma()).execute({
    id,
  })
}
