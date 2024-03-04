import { UseCaseError } from '@/app/core/errors/useCaseErro'

export class AssistanteAlreadyExistsError
  extends Error
  implements UseCaseError
{
  constructor() {
    super('Assistant Already Exists')
  }
}
