import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { Client } from '../../../enterprise/entities/Client'
import { EditClientUseCase } from './EditClient'
import { NotFoundError } from '../errors/NotFoundError'

let clientRepository: ClientsInMemoryRepository
let sut: EditClientUseCase
let clientCreated: Client

describe('Edit Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new EditClientUseCase(clientRepository)
    clientCreated = makeClient({
      code: 'xx00-0',
    })
    clientRepository.create(clientCreated)
  })

  it('It must be possible to edit an assistant.', async () => {
    const result = await sut.execute({
      id: clientCreated.id.toString(),
      name: 'Client-2',
      network: 'Rede 1',
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
    if (result.value?.client) {
      expect(result.value?.client).toMatchObject(
        expect.objectContaining({ name: 'Client-2', network: 'Rede 1' }),
      )
    }
  })

  it('It should not be possible to edit an assistant where id wrong.', async () => {
    const result = await sut.execute({
      id: 'id-wrong',
      name: 'Client-2',
      network: 'Rede 1',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })
})
