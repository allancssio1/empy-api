import { Entity } from '@/app/core/entities/Entity'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

interface AssistentProps {
  name: string
  email: string
  phone: string
}

export class Assistent extends Entity<AssistentProps> {
  get name() {
    return this.props.name
  }
  get email() {
    return this.props.email
  }
  get phone() {
    return this.props.phone
  }

  static create(props: AssistentProps, id?: UniqueEntityId) {
    return new Assistent(props, id)
  }
}
