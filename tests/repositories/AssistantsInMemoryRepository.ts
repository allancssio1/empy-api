import { AssistantRepository } from '@/app/domain/application/repositories/assistantRepository'
import { Assistant } from '@/app/domain/enterprise/entities/Assistant'

export class AssistantsInMemoryRepository implements AssistantRepository {
  assistants: Assistant[] = []

  async create(assistant: Assistant): Promise<Assistant> {
    await this.assistants.push(assistant)
    return assistant
  }

  async update(assistant: Assistant): Promise<Assistant> {
    const itemIndex = this.assistants.findIndex(
      (item) => item.id.toString() === assistant.id.toString(),
    )
    this.assistants[itemIndex] = assistant

    return assistant
  }

  async findById(id: string): Promise<Assistant | null> {
    const assistant = await this.assistants.find(
      (item) => item.id.toString() === id,
    )

    return assistant ?? null
  }

  async findByEmail(email: string): Promise<Assistant | null> {
    const assistant = await this.assistants.find((item) => item.email === email)

    return assistant ?? null
  }

  async findMany(): Promise<Assistant[] | []> {
    return this.assistants
  }

  async delete(assistant: Assistant): Promise<void> {
    const itemIndex = this.assistants.findIndex(
      (item) => item.id.toString() === assistant.id.toString(),
    )

    await this.assistants.splice(itemIndex, 1)
  }
}
