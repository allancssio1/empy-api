import { makeAssistant } from '#/factories/makeAssitant'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { CreateAssistantUseCase } from './CreateAssistant'

let assistantRepository: AssistantsInMemoryRepository
let sut: CreateAssistantUseCase

describe('Create Assistant', () => {
  beforeEach(() => {
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new CreateAssistantUseCase(assistantRepository)
  })

  it('It must be possible to register an assistant.', async () => {
    const { assistant } = await sut.execute({
      name: 'Assistant-1',
      email: 'assistant@email.com',
      phone: '9989999999',
    })

    expect(assistant.email).toEqual('assistant@email.com')
  })

  it('It should not be possible to register an assistant with an existing email address.', async () => {
    await assistantRepository.create(
      makeAssistant({ email: 'assistant@email.com' }),
    )
    expect(
      async () =>
        await sut.execute({
          name: 'Assistant-1',
          email: 'assistant@email.com',
          phone: '9989999999',
        }),
    ).rejects.toBeInstanceOf(Error)
  })
})
