import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { DeleteClientUseCase, DeleteClientUseCaseProps } from '../DeleteClient'

export const createClient = (data: DeleteClientUseCaseProps) => {
  return new DeleteClientUseCase(new ClientsRepositoryPrisma()).execute(data)
}
