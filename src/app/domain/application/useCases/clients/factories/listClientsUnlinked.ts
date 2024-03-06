import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { FetchManyClientsUseCase } from '../FetchManyClientsUnlinked'

export const createClient = () => {
  return new FetchManyClientsUseCase(new ClientsRepositoryPrisma()).execute()
}
