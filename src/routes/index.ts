import { Router } from 'express'
import { assistantsRoutes } from './assistant/AssistantRoutes'

const router = Router()

router.use('/assistent', assistantsRoutes)

export { router }
