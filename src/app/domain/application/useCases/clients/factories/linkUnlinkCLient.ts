import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import {
  LinkUnlinkClientUseCase,
  LinkUnlinkClientUseCaseProps,
} from '../LinkUnlinkClient'
import { AssistantsRepositoryPrisma } from '@/app/core/repositories/prisma/AssistantsRepositoryPrisma'

export const linkUnlinkClient = (data: LinkUnlinkClientUseCaseProps) => {
  return new LinkUnlinkClientUseCase(
    new ClientsRepositoryPrisma(),
    new AssistantsRepositoryPrisma(),
  ).execute(data)
}
