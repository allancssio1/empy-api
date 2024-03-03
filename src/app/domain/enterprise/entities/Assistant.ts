import { Entity } from '@/app/core/entities/Entity'
import { UniqueEntityId } from '@/app/core/entities/UniqueEntityId'

interface AssistantProps {
  name: string
  email: string
  phone: string
}

export class Assistant extends Entity<AssistantProps> {
  get name() {
    return this.props.name
  }
  set name(value: string) {
    this.props.name = value
  }

  get email() {
    return this.props.email
  }
  set email(value: string) {
    this.props.email = value
  }

  get phone() {
    return this.props.phone
  }
  set phone(value: string) {
    this.props.phone = value.replace(/\D/g, '')
  }

  static create(props: AssistantProps, id?: UniqueEntityId) {
    return new Assistant(props, id)
  }
}
