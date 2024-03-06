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

  const result = createAssistantSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(200).json(result.error.format())
  }

  const { name, email, phone } = createAssistantSchema.parse(req.body)

  const assistant = await createAssistant({ name, email, phone })

  if (assistant.isLeft())
    return res.status(400).json({ message: assistant.value.message })

  return res
    .status(200)
    .json({ message: 'Create success', data: assistant.value })
}
