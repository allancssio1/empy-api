import { makeAssistant } from '#/factories/makeAssitant'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { Assistant } from '../../../enterprise/entities/Assistant'
import { EditAssistantUseCase } from './EditClient'
import { NotFoundError } from '../errors/NotFoundError'

let assistantRepository: AssistantsInMemoryRepository
let sut: EditAssistantUseCase
let assistantCreated: Assistant

describe('Edit Assistant', () => {
  beforeEach(() => {
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new EditAssistantUseCase(assistantRepository)
    assistantCreated = makeAssistant({
      name: 'Assistant-1',
      email: 'assistant@email.com',
      phone: '9989999999',
    })
    assistantRepository.create(assistantCreated)
  })

  it('It must be possible to edit an assistant.', async () => {
    const result = await sut.execute({
      id: assistantCreated.id.toString(),
      name: 'Assistant-2',
      email: 'assistant2@email.com',
      phone: '(99) 9 9999-9999',
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })

  it('It should not be possible to edit an assistant where id wrong.', async () => {
    await assistantRepository.create(
      makeAssistant({ email: 'assistant@email.com' }),
    )
    const result = await sut.execute({
      id: 'id-wrong',
      name: 'Assistant-2',
      email: 'assistant2@email.com',
      phone: '(99) 9 9999-9999',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })
})
