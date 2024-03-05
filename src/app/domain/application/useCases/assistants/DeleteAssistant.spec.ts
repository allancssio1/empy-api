import { makeAssistant } from '#/factories/makeAssitant'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { Assistant } from '../../../enterprise/entities/Assistant'
import { DeleteAssistantUseCase } from './DeleteAssistant'
import { NotFoundError } from '../errors/NotFoundError'

let assistantRepository: AssistantsInMemoryRepository
let sut: DeleteAssistantUseCase
let assistantCreated: Assistant

describe('Edit Assistant', () => {
  beforeEach(() => {
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new DeleteAssistantUseCase(assistantRepository)
    assistantCreated = makeAssistant()
    assistantRepository.create(assistantCreated)
  })

  it('It must be possible to delet an assistant.', async () => {
    expect(assistantRepository.assistants).toHaveLength(1)

    const result = await sut.execute({
      id: assistantCreated.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
    expect(assistantRepository.assistants).toHaveLength(0)
  })

  it('It should not be possible to edit an assistant where id wrong.', async () => {
    const result = await sut.execute({
      id: 'id-wrong',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })
})
