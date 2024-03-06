import { Router } from 'express'
import { assistantsRoutes } from './assistant/AssistantRoutes'
import { clientsRoutes } from './client/ClientRoutes'

const router = Router()

router.use('/assistants', assistantsRoutes)
router.use('/clients', clientsRoutes)

export { router }
