import { createAssistantController } from '@/app/http/controllers/assistents/createAssistant'
import { editAssistantController } from '@/app/http/controllers/assistents/editAssistant'
import { listAssistantsController } from '@/app/http/controllers/assistents/listAssistants'
import { Router } from 'express'

const assistantsRoutes = Router()

assistantsRoutes.get('/list', listAssistantsController)
assistantsRoutes.post('/create', createAssistantController)
assistantsRoutes.post('/edit/:id', editAssistantController)

export { assistantsRoutes }
