import { Router } from 'express'
import { assistantsRoutes } from './assistant/AssistantRoutes'

const router = Router()

router.use('/assistants', assistantsRoutes)

export { router }
