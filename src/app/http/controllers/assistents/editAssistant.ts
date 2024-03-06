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

  const result = editAssistantBodySchema.safeParse(req.body)

  if (!result.success) {
    return res.status(200).json(result.error.format())
  }

  const { name, email, phone } = editAssistantBodySchema.parse(req.body)

  const { id } = editAssistantParamsSchema.parse(req.params)

  const assistant = await editAssistant({ id, name, email, phone })

  if (assistant.isLeft())
    return res.status(200).json({ message: assistant.value.message })

  return res
    .status(200)
    .json({ message: 'Edit success', data: assistant.value })
}
