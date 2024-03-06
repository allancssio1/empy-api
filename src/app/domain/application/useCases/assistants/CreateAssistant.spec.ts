import { makeAssistant } from '#/factories/makeAssistant'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { CreateAssistantUseCase } from './CreateAssistant'
import { AssistanteAlreadyExistsError } from '../errors/AssistantAlreadyExistsError'

let assistantRepository: AssistantsInMemoryRepository
let sut: CreateAssistantUseCase

describe('Create Assistant', () => {
  beforeEach(() => {
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new CreateAssistantUseCase(assistantRepository)
  })

  it('It must be possible to register an assistant.', async () => {
    const result = await sut.execute({
      name: 'Assistant-1',
      email: 'assistant@email.com',
      phone: '9989999999',
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })

  it('It should not be possible to register an assistant with an existing email address.', async () => {
    await assistantRepository.create(
      makeAssistant({ email: 'assistant@email.com' }),
    )
    const result = await sut.execute({
      name: 'Assistant-1',
      email: 'assistant@email.com',
      phone: '9989999999',
    })
    expect(result.isRight()).toBe(false)
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(AssistanteAlreadyExistsError)
  })
})
