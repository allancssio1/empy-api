import express from 'express'
import { router } from './routes'
import { env } from '@/env'
import swaggerUI from 'swagger-ui-express'
import docsFile from './swagger.json'

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docsFile))
app.use(router)

app.listen(env.PORT, () => console.log('Server Running'))
