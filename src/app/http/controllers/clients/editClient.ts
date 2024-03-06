import { editClient } from '@/app/domain/application/useCases/clients/factories/editClient'
import { Request, Response } from 'express'
import { z } from 'zod'

export const editClientController = async (req: Request, res: Response) => {
  const editClientParamsSchema = z.object({
    id: z.string({ required_error: 'Client id is required in params' }),
  })
  const editClientBodySchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    assistantId: z.string({ required_error: 'Assistant id is required' }),
    network: z.string({ required_error: 'Network is required' }),
  })

  const result = editClientBodySchema.safeParse(req.body)

  if (!result.success) {
    return res.status(200).json(result.error.format())
  }

  const { name, assistantId, network } = editClientBodySchema.parse(req.body)

  const { id } = editClientParamsSchema.parse(req.params)

  const client = await editClient({ id, name, network, assistantId })

  if (client.isLeft())
    return res.status(200).json({ message: client.value.message })

  return res.status(200).json({ message: 'Edit success', data: client.value })
}
