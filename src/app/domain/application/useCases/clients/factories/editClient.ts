import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { EditClientUseCase, EditClientUseCaseProps } from '../EditClient'

export const editClient = (data: EditClientUseCaseProps) => {
  return new EditClientUseCase(new ClientsRepositoryPrisma()).execute(data)
}
