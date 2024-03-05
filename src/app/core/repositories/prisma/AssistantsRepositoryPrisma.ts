import { AssistantRepository } from '@/app/domain/application/repositories/assistantRepository'
import { Assistant } from '@/app/domain/enterprise/entities/Assistant'
import { prisma } from 'prisma'
import { UniqueEntityId } from '../../entities/UniqueEntityId'

export class AssistantsRepositoryPrisma implements AssistantRepository {
  async create(assistant: Assistant): Promise<Assistant> {
    await prisma.assistants.create({
      data: {
        id: assistant.id.toString(),
        email: assistant.email,
        name: assistant.name,
        phone: assistant.phone.replace(/\D/g, ''),
      },
    })

    return assistant
  }

  async update(assistant: Assistant): Promise<Assistant> {
    await prisma.assistants.update({
      where: { id: assistant.id.toString() },
      data: {
        name: assistant.name,
        phone: assistant.phone,
      },
    })
    return assistant
  }

  async findByEmail(email: string): Promise<Assistant | null> {
    const assistant = await prisma.assistants.findFirst({ where: { email } })
    return assistant
      ? Assistant.create(
          {
            name: assistant.name,
            phone: assistant.phone,
            email: assistant.email,
          },
          new UniqueEntityId(assistant.id),
        )
      : null
  }

  async findById(id: string): Promise<Assistant | null> {
    const assistant = await prisma.assistants.findUnique({ where: { id } })

    return assistant
      ? Assistant.create(
          {
            name: assistant.name,
            phone: assistant.phone,
            email: assistant.email,
          },
          new UniqueEntityId(assistant.id),
        )
      : null
  }

  async findMany(): Promise<[] | Assistant[]> {
    const response = await prisma.assistants.findMany()

    const clients =
      response.length > 0
        ? response.map((item) => {
            const client = Assistant.create(
              {
                name: item.name,
                email: item.email,
                phone: item.phone,
              },
              new UniqueEntityId(item.id),
            )
            return client
          })
        : []

    return clients
  }

  async delete(assistant: Assistant): Promise<void> {
    await prisma.assistants.delete({ where: { id: assistant.id.toString() } })
  }
}
