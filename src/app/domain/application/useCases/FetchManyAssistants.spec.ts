import { makeAssistant } from '#/factories/makeAssitant'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { Assistant } from '../../enterprise/entities/Assistant'
import { FetchManyAssistantsUseCase } from './FetchManyAssistants'

let assistantRepository: AssistantsInMemoryRepository
let sut: FetchManyAssistantsUseCase
let assistantCreated: Assistant

describe('Fetch Many Assistant', () => {
  beforeEach(() => {
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new FetchManyAssistantsUseCase(assistantRepository)
    assistantRepository.create(makeAssistant())
    assistantRepository.create(makeAssistant())
    assistantRepository.create(makeAssistant())
  })

  it('It must be possible to find many assistants.', async () => {
    const result = await sut.execute()

    expect(result.value?.assistants).toHaveLength(3)
  })
})
