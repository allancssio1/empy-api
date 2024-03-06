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

  const result = await deleteAssistant({ id })

  if (result.isLeft())
    return res.status(404).json({ message: result.value.message })

  return res.status(200).json({ message: 'Delete success', data: result.value })
}
