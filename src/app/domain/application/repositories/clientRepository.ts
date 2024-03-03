import { Client } from '../../enterprise/entities/Client'

export interface ClientRepository {
  create(client: Client): Promise<Client>
  update(client: Client): Promise<Client>
  findMany(): Promise<Client[] | []>
  delete(client: Client): Promise<void>
}
