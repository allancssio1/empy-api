import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { CreateClientUseCase } from './CreateClient'
import { ClientAlreadyExistsError } from '../errors/ClientAlreadyExistsError'

let clientRepository: ClientsInMemoryRepository
let sut: CreateClientUseCase

describe('Create Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    sut = new CreateClientUseCase(clientRepository)
  })

  it('It must be possible to register an client.', async () => {
    const result = await sut.execute({
      name: 'Client-1',
      code: 'xx00-2',
      network: 'Rede 2',
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })

  it('It should not be possible to register an client with an existing email address.', async () => {
    await clientRepository.create(makeClient({ code: 'xx00-2' }))
    const result = await sut.execute({
      name: 'Client-1',
      code: 'xx00-2',
      network: 'Rede 2',
    })
    expect(result.isRight()).toBe(false)
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ClientAlreadyExistsError)
  })
})
