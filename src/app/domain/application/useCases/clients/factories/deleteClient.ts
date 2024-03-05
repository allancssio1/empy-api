import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { DeleteClientUseCase } from '../DeleteClient'

export const createClient = () => {
  return new DeleteClientUseCase(new ClientsRepositoryPrisma())
}
