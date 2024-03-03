import { Assistent } from '../../enterprise/entities/Assistent'

export interface AssitentRepository {
  create(assistent: Assistent): Promise<Assistent>
  update(assistent: Assistent): Promise<Assistent>
  findMany(): Promise<Assistent[] | []>
  delete(assistent: Assistent): Promise<void>
}
