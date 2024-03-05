import { Client } from '../../enterprise/entities/Client'

export interface ClientRepository {
  create(client: Client): Promise<Client>
  update(client: Client): Promise<Client>
  findByCode(code: string): Promise<Client | null>
  findManyClientsUnlinked(): Promise<Client[]>
  findManyClientsLinked(assistantId: string): Promise<Client[]>
  delete(client: Client): Promise<void>
}
