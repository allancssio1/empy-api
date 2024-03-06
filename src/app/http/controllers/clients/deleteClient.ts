import { deleteClient } from '@/app/domain/application/useCases/clients/factories/deleteClient'
import { Request, Response } from 'express'
import { z } from 'zod'

export const deleteClientController = async (req: Request, res: Response) => {
  const deleteClientParamsSchema = z.object({
    id: z.string({ required_error: 'Client id is required in params' }),
  })

  const { id } = deleteClientParamsSchema.parse(req.params)

  const result = await deleteClient({ id })

  if (result.isLeft())
    return res.status(200).json({ message: result.value.message })

  return res.status(200).json({ message: 'Delete success', data: result.value })
}
