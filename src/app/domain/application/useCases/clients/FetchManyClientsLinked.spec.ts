import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { FetchManyClientsUseCase } from './FetchManyClientsUnlinked'

let clientRepository: ClientsInMemoryRepository
let sut: FetchManyClientsUseCase

describe('Fetch Many Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new FetchManyClientsUseCase(clientRepository)
    clientRepository.create(makeClient())
    clientRepository.create(makeClient())
    clientRepository.create(makeClient())
  })

  it('It must be possible to find many clients of an assistant.', async () => {
    const result = await sut.execute()

    expect(result.value?.clients).toHaveLength(3)
  })
})
