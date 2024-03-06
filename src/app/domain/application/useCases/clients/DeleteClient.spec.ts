import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { Client } from '../../../enterprise/entities/Client'
import { DeleteClientUseCase } from './DeleteClient'
import { NotFoundError } from '../errors/NotFoundError'

let clientRepository: ClientsInMemoryRepository
let sut: DeleteClientUseCase
let clientCreated: Client

describe('Edit Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new DeleteClientUseCase(clientRepository)
    clientCreated = makeClient()
    clientRepository.create(clientCreated)
  })

  it('It must be possible to delet an assistant.', async () => {
    expect(clientRepository.clients).toHaveLength(1)

    const result = await sut.execute({
      id: clientCreated.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
    expect(clientRepository.clients).toHaveLength(0)
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
