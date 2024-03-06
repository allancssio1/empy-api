import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import {
  FetchManyClientsUseCase,
  FetchManyClientsUseCaseProps,
} from '../FetchManyClientsLinked'

export const createClient = (data: FetchManyClientsUseCaseProps) => {
  return new FetchManyClientsUseCase(new ClientsRepositoryPrisma()).execute(
    data,
  )
}
