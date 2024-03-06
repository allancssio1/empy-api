import { makeClient } from '#/factories/makeClient'
import { ClientsInMemoryRepository } from '#/repositories/ClientInMemoryRepository'
import { AssistantsInMemoryRepository } from '#/repositories/AssistantsInMemoryRepository'
import { Client } from '../../../enterprise/entities/Client'
import { LinkUnlinkClientUseCase } from './LinkUnlinkClient'
import { NotFoundError } from '../errors/NotFoundError'
import { Assistant } from '@/app/domain/enterprise/entities/Assistant'
import { makeAssistant } from '#/factories/makeAssistant'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

let clientRepository: ClientsInMemoryRepository
let assistantRepository: AssistantsInMemoryRepository
let sut: LinkUnlinkClientUseCase
let clientCreated: Client
let assistantCreated: Assistant

describe('Edit Client', () => {
  beforeEach(() => {
    clientRepository = new ClientsInMemoryRepository()
    assistantRepository = new AssistantsInMemoryRepository()
    sut = new LinkUnlinkClientUseCase(clientRepository, assistantRepository)
    clientCreated = makeClient()
    clientRepository.create(clientCreated)

    assistantCreated = makeAssistant()
    assistantRepository.create(assistantCreated)
  })

  it('It must be possible to link a client an assistant.', async () => {
    const result = await sut.execute({
      assistantId: assistantCreated.id.toString(),
      clientId: clientCreated.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
    expect(clientRepository.clients[0].assistantId).toBeInstanceOf(
      UniqueEntityId,
    )
  })

  it('It must be possible to unlink a client of an assistant.', async () => {
    clientRepository.clients[0].assistantId = assistantCreated.id
    const result = await sut.execute({
      assistantId: assistantCreated.id.toString(),
      clientId: clientCreated.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
    expect(clientRepository.clients[0].assistantId).toEqual(undefined)
  })

  it('It should not be possible to edit an client where id wrong.', async () => {
    const result = await sut.execute({
      assistantId: 'id-wrong',
      clientId: clientCreated.id.toString(),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })

  it('It must be possible to link an client to an assistant.', async () => {
    const result = await sut.execute({
      assistantId: assistantCreated.id.toString(),
      clientId: 'client-wrong',
    })
    expect(result.isRight()).toBe(false)
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotFoundError)
  })
})
