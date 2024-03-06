import { editAssistant } from '@/app/domain/application/useCases/assistants/factories/editAssistant'
import { Request, Response } from 'express'
import { z } from 'zod'

export const editAssistantController = async (req: Request, res: Response) => {
  const editAssistantParamsSchema = z.object({
    id: z.string({ required_error: 'Assistant id is required in params' }),
  })
  const editAssistantBodySchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Email invalid ' }),
    phone: z
      .string({ required_error: 'Phone number is required' })
      .min(11, { message: '9 digits are required on a telephone' }),
  })

  const { name, email, phone } = editAssistantBodySchema.parse(req.body)
  const { id } = editAssistantParamsSchema.parse(req.params)

  const assistants = await editAssistant({ id, name, email, phone })
  return res.status(200).json(assistants)
}
