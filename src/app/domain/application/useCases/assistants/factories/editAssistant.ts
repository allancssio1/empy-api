import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'
import {
  EditAssistantUseCase,
  EditAssistantUseCaseProps,
} from '@/app/domain/application/useCases/assistants/EditAssistant'

export const editAssistant = (data: EditAssistantUseCaseProps) => {
  return new EditAssistantUseCase(new AssistantsRepositoryPrisma()).execute(
    data,
  )
}
