import { AssistantRepository } from '@/app/domain/application/repositories/assistantRepository'
import { Assistant } from '@/app/domain/enterprise/entities/Assistant'
import { prisma } from 'prisma'

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

  update(assistant: Assistant): Promise<Assistant> {
    throw new Error('Method not implemented.')
  }

  findByEmail(email: string): Promise<Assistant | null> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<Assistant | null> {
    throw new Error('Method not implemented.')
  }

  findMany(): Promise<[] | Assistant[]> {
    throw new Error('Method not implemented.')
  }

  delete(assistant: Assistant): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
