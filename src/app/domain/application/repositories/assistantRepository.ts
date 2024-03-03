import { Assistant } from '../../enterprise/entities/Assistant'

export interface AssistantRepository {
  create(assistant: Assistant): Promise<Assistant>
  update(assistant: Assistant): Promise<Assistant>
  findMany(): Promise<Assistant[] | []>
  delete(assistant: Assistant): Promise<void>
}
