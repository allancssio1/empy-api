import { createClient } from '@/app/domain/application/useCases/clients/factories/createClient'
import { Request, Response } from 'express'
import { z } from 'zod'

export const createClientController = async (req: Request, res: Response) => {
  const createClientSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    code: z.string({ required_error: 'Code is required' }),
    network: z.string({ required_error: 'Network is required' }),
  })

  const result = createClientSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json(result.error.format())
  }

  const { name, code, network } = createClientSchema.parse(req.body)

  const client = await createClient({ name, code, network })

  if (client.isLeft())
    return res.status(400).json({ message: client.value.message })

  return res.status(201).json({ message: 'Create success', data: client.value })
}
