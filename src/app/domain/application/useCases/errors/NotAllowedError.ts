import { UseCaseError } from '@/app/core/errors/useCaseErro'

export class NotAllowedError extends Error implements UseCaseError {
  constructor() {
    super('Not allowed.')
  }
}
