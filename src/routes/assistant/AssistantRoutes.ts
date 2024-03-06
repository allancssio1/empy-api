import { listAssistantsController } from '@/app/http/controllers/assistents/listAssistants'
import { Router } from 'express'

const assistantsRoutes = Router()

assistantsRoutes.get('/list', listAssistantsController)

export { assistantsRoutes }
