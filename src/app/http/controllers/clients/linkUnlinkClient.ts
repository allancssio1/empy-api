import { Request, Response } from 'express'
import { linkUnlinkClient } from '@/app/domain/application/useCases/clients/factories/linkUnlinkCLient'
import { z } from 'zod'

export const linkUnlinkClientController = async (
  req: Request,
  res: Response,
) => {
  const linkUnlinkClientParamsSchema = z.object({
    clientId: z.string(),
    assistantId: z.string(),
  })

  const { assistantId, clientId } = linkUnlinkClientParamsSchema.parse(
    req.params,
  )

  const client = await linkUnlinkClient({ assistantId, clientId })

  if (client.isLeft())
    return res.status(200).json({ message: client.value.message })

  return res.status(200).json({ message: 'Edit success', data: client.value })
}
