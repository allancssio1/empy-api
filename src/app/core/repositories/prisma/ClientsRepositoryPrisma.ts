import { ClientRepository } from '@/app/domain/application/repositories/clientRepository'
import { Client } from '@/app/domain/enterprise/entities/Client'
import { prisma } from 'prisma'
import { UniqueEntityId } from '../../entities/UniqueEntityId'

export class ClientsRepositoryPrisma implements ClientRepository {
  async create(client: Client): Promise<Client> {
    await prisma.clients.create({
      data: {
        id: client.id.toString(),
        code: client.code,
        name: client.name,
        netWork: client.network,
      },
    })

    return client
  }

  async update(client: Client): Promise<Client> {
    await prisma.clients.update({
      where: { id: client.id.toString() },
      data: {
        name: client.name,
        netWork: client.network,
        assistantId: client.assistantId?.toString() ?? undefined,
      },
    })
    return client
  }

  async findByCode(code: string): Promise<Client | null> {
    const client = await prisma.clients.findFirst({ where: { code } })
    return client
      ? Client.create(
          {
            code: client.code,
            name: client.name,
            network: client.netWork,
            assistantId: client?.assistantId
              ? new UniqueEntityId(client?.assistantId)
              : undefined,
          },
          new UniqueEntityId(client.id),
        )
      : null
  }

  async findById(id: string): Promise<Client | null> {
    const client = await prisma.clients.findFirst({ where: { id } })
    return client
      ? Client.create(
          {
            code: client.code,
            name: client.name,
            network: client.netWork,
            assistantId: client?.assistantId
              ? new UniqueEntityId(client?.assistantId)
              : undefined,
          },
          new UniqueEntityId(client.id),
        )
      : null
  }

  async findManyClientsUnlinked(): Promise<Client[]> {
    const response = await prisma.clients.findMany({
      where: { assistantId: undefined || null },
    })

    const clients =
      response.length > 0
        ? response.map((item) => {
            const client = Client.create(
              {
                code: item.code,
                name: item.name,
                network: item.netWork,
                assistantId: item.assistantId
                  ? new UniqueEntityId(item.assistantId)
                  : undefined,
              },
              new UniqueEntityId(item.id),
            )

            return client
          })
        : []

    return clients
  }

  async findManyClientsLinked(assistantId: string): Promise<Client[]> {
    const response = await prisma.clients.findMany({
      where: { assistantId },
    })

    const clients =
      response.length > 0
        ? response.map((item) => {
            const client = Client.create({
              code: item.code,
              name: item.name,
              network: item.netWork,
              assistantId: item.assistantId
                ? new UniqueEntityId(item.assistantId)
                : undefined,
            })

            return client
          })
        : []

    return clients
  }

  async delete(client: Client): Promise<void> {
    await prisma.clients.delete({ where: { id: client.id.toString() } })
  }
}
