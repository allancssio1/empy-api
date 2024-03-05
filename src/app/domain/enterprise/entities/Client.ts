import { Entity } from '@/app/core/entities/Entity'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

interface ClientProps {
  name: string
  code: string
  network: string
  assistantId?: UniqueEntityId
}

export class Client extends Entity<ClientProps> {
  get name() {
    return this.props.name
  }

  get code() {
    return this.props.code
  }

  get assistantId() {
    return this.props.assistantId
  }

  get network() {
    return this.props.network
  }

  static create(props: ClientProps, id?: UniqueEntityId) {
    return new Client(props, id)
  }
}
