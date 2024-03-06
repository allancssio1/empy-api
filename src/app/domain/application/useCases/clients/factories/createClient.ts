import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import { CreateClientUseCase, CreateClientUseCaseProps } from '../CreateClient'

export const createClient = (data: CreateClientUseCaseProps) => {
  return new CreateClientUseCase(new ClientsRepositoryPrisma()).execute(data)
}
