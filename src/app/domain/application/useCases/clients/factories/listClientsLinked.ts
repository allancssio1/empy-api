import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { FetchManyClientsUseCase } from '../FetchManyClientsLinked'

export const createClient = () => {
  return new FetchManyClientsUseCase(new ClientsRepositoryPrisma())
}
