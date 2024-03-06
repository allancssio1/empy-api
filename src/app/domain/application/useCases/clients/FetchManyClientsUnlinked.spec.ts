import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'
import { FetchManyClientsUnlinkedUseCase } from './FetchManyClientsUnlinked'

let clientRepository: ClientsInMemoryRepository
let sut: FetchManyClientsUnlinkedUseCase

describe('Fetch Many Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new FetchManyClientsUnlinkedUseCase(clientRepository)
    clientRepository.create(makeClient())
    clientRepository.create(makeClient())
    clientRepository.create(makeClient())
    clientRepository.create(makeClient({ assistantId: new UniqueEntityId() }))
  })

  it('It must be possible to fetch many clients without assistant linked.', async () => {
    const result = await sut.execute()

    expect(result.value?.clients).toHaveLength(3)
  })
})
