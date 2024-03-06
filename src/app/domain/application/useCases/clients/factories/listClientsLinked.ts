import { ClientsRepositoryPrisma } from '@/app/core/repositories/prisma/ClientsRepositoryPrisma'
import {
  FetchManyClientsLinkedUseCase,
  FetchManyClientsLinkedUseCaseProps,
} from '../FetchManyClientsLinked'

export const listClientLinked = (data: FetchManyClientsLinkedUseCaseProps) => {
  return new FetchManyClientsLinkedUseCase(
    new ClientsRepositoryPrisma(),
  ).execute(data)
}
