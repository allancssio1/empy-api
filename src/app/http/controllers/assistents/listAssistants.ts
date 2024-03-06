import { listAssistants } from '@/app/domain/application/useCases/assistants/factories/listAssistants'
import { Request, Response } from 'express'

export const listAssistantsController = async (req: Request, res: Response) => {
  const assistants = await listAssistants()
  return res.status(200).json(assistants)
}
