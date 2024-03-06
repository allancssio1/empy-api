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

  it('It must be possible to edit an client.', async () => {
    const result = await sut.execute({
      id: clientCreated.id.toString(),
      name: 'Client-2',
      network: 'Rede 1',
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })

  it('It should not be possible to edit an client where id wrong.', async () => {
    const result = await sut.execute({
      id: 'id-wrong',
      name: 'Client-2',
      network: 'Rede 1',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })

  it('It must be possible to link an client to an assistant.', async () => {
    expect(clientRepository.clients[0].assistantId).toEqual(undefined)

    const result = await sut.execute({
      id: clientCreated.id.toString(),
      name: clientCreated.name,
      network: clientCreated.network,
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })
})
