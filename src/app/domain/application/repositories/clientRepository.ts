import { Client } from '../../enterprise/entities/Client'

export interface AssitentRepository {
  create(client: Client): Promise<Client>
  update(client: Client): Promise<Client>
  findMany(): Promise<Client[] | []>
  delete(client: Client): Promise<void>
}
