import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { CreateClientUseCase } from '../CreateClient'

export const createClient = () => {
  return new CreateClientUseCase(new ClientsRepositoryPrisma())
}
