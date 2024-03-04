import { UseCaseError } from '@/app/core/errors/useCaseErro'

export class NotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Not found!')
  }
}
