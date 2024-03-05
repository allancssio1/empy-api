import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { EditClientUseCase } from '../EditClient'

export const createClient = () => {
  return new EditClientUseCase(new ClientsRepositoryPrisma())
}
