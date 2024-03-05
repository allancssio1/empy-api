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

  set name(value: string) {
    this.props.name = value
  }

  get code() {
    return this.props.code
  }

  get assistantId() {
    return this.props.assistantId
  }

  set assistantId(value: UniqueEntityId | undefined) {
    this.props.assistantId = value
  }

  get network() {
    return this.props.network
  }

  set network(value: string) {
    this.props.network = value
  }

  static create(props: ClientProps, id?: UniqueEntityId) {
    return new Client(props, id)
  }
}
