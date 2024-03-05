import { Router, Request, Response } from 'express'

const assistantsRoutes = Router()

assistantsRoutes.get('/', async (req: Request, res: Response) => {
  return res.json('eu')
})

export { assistantsRoutes }
