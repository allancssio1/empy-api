import { listClientUnlinked } from '@/app/domain/application/useCases/clients/factories/listClientsUnlinked'
import { Request, Response } from 'express'

export const listClientUnlinkedController = async (
  req: Request,
  res: Response,
) => {
  const clients = await listClientUnlinked()

  return res.status(200).json({ message: 'List success', data: clients.value })
}
