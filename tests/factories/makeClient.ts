import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'
import { Client } from '@/app/domain/enterprise/entities/Client'
import { faker } from '@faker-js/faker'

export const makeClient = (
  override: Partial<Client> = {},
  id?: UniqueEntityId,
) => {
  const client = Client.create(
    {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      network: 'Rede 2',
      code: `${faker.string.alpha(2)}${faker.string.numeric(2)}-${faker.string.numeric(1)}`,
      ...override,
    },
    id,
  )
  return client
}
