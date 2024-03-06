import { listClientLinked } from '@/app/domain/application/useCases/clients/factories/listClientsLinked'
import { Request, Response } from 'express'
import { z } from 'zod'

export const listClientLinkedController = async (
  req: Request,
  res: Response,
) => {
  const listClientLinkedParamsSchema = z.object({
    assistantId: z.string({
      required_error: 'Assistant id is required in params',
    }),
  })

  const { assistantId } = listClientLinkedParamsSchema.parse(req.params)

  const result = await listClientLinked({ assistantId })

  return res.status(200).json({ message: 'List success', data: result.value })
}
