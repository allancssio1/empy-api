import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'
import { Assistant } from '@/app/domain/enterprise/entities/Assistant'
import { faker } from '@faker-js/faker'

export const makeAssistant = (
  override: Partial<Assistant> = {},
  id?: UniqueEntityId,
) => {
  const assistant = Assistant.create(
    {
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.internet.email(),
      phone: faker.string.numeric({ length: 9 }),
      ...override,
    },
    id,
  )
  return assistant
}
