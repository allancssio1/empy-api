import { ClientRepository } from '@/app/domain/application/repositories/clientRepository'
import { Client } from '@/app/domain/enterprise/entities/Client'

export class ClientsInMemoryRepository implements ClientRepository {
  clients: Client[] = []
  async create(client: Client): Promise<Client> {
    await this.clients.push(client)
    return client
  }
  async update(client: Client): Promise<Client> {
    const itemIndex = this.clients.findIndex(
      (item) => item.id.toString() === client.id.toString(),
    )
    this.clients[itemIndex] = client

    return client
  }
  async findMany(): Promise<Client[] | []> {
    return this.clients
  }
  async delete(client: Client): Promise<void> {
    const itemIndex = this.clients.findIndex(
      (item) => item.id.toString() === client.id.toString(),
    )

    await this.clients.splice(itemIndex, 1)
  }
}
