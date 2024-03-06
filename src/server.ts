import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import { ZodError } from 'zod'
import { env } from '@/env'

const app = express()

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    if (err instanceof ZodError) {
      return res
        .status(400)
        .json({ message: 'Validation error', issues: err.format() })
    }

    if (env.NODE_ENV !== 'production') {
      console.error(err)
    }
    return res.status(500).json({ message: 'Internal server error.' })
  }
  next()
})

app.listen(env.PORT, () => console.log('Server Running'))
