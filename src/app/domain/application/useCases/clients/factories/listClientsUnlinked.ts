import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { FetchManyClientsUnlinkedUseCase } from '../FetchManyClientsUnlinked'

export const listClientUnlinked = () => {
  return new FetchManyClientsUnlinkedUseCase(
    new ClientsRepositoryPrisma(),
  ).execute()
}
