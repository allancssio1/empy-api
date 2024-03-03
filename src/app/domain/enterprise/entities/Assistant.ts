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
  get email() {
    return this.props.email
  }
  get phone() {
    return this.props.phone
  }

  static create(props: AssistantProps, id?: UniqueEntityId) {
    return new Assistant(props, id)
  }
}
