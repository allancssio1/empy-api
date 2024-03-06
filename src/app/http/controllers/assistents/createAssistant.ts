import { createAssistant } from '@/app/domain/application/useCases/assistants/factories/createAssistant'
import { Request, Response } from 'express'
import { z } from 'zod'

export const createAssistantController = async (
  req: Request,
  res: Response,
) => {
  const createAssistantSchema = z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Email invalid ' }),
    phone: z
      .string({ required_error: 'Phone number is required' })
      .min(11, { message: '9 digits are required on a telephone' }),
  })

  const { name, email, phone } = createAssistantSchema.parse(req.body)

  const assistants = await createAssistant({ name, email, phone })
  return res.status(200).json(assistants)
}
