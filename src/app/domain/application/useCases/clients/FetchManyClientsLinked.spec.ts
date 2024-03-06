import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'
import { FetchManyClientsLinkedUseCase } from './FetchManyClientsLinked'

let clientRepository: ClientsInMemoryRepository
let sut: FetchManyClientsLinkedUseCase

describe('Fetch Many Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new FetchManyClientsLinkedUseCase(clientRepository)

    clientRepository.create(
      makeClient({ assistantId: new UniqueEntityId('assitent-1') }),
    )
    clientRepository.create(
      makeClient({ assistantId: new UniqueEntityId('assitent-2') }),
    )
    clientRepository.create(
      makeClient({ assistantId: new UniqueEntityId('assitent-1') }),
    )
  })

  it('It must be possible to find many clients of an assistant.', async () => {
    const result = await sut.execute({ assistantId: 'assitent-1' })

    expect(result.value?.clients).toHaveLength(2)
  })
})
