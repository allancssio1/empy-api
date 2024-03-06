import { deleteAssistant } from '@/app/domain/application/useCases/assistants/factories/deleteAssistant'
import { Request, Response } from 'express'
import { z } from 'zod'

export const deleteAssistantController = async (
  req: Request,
  res: Response,
) => {
  const deleteAssistantParamsSchema = z.object({
    id: z.string({ required_error: 'Assistant id is required in params' }),
  })

  const { id } = deleteAssistantParamsSchema.parse(req.params)

  await deleteAssistant({ id })

  return res.status(200).json()
}
