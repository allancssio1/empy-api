import { UseCaseError } from '@/app/core/errors/useCaseErro'

export class ClientAlreadyExistsError extends Error implements UseCaseError {
  constructor() {
    super('Client already exixts')
  }
}
