import { createAssistantController } from '@/app/http/controllers/assistents/createAssistant'
import { deleteAssistantController } from '@/app/http/controllers/assistents/deleteAssistant'
import { editAssistantController } from '@/app/http/controllers/assistents/editAssistant'
import { listAssistantsController } from '@/app/http/controllers/assistents/listAssistants'
import { Router } from 'express'

const assistantsRoutes = Router()

assistantsRoutes.get('/list', listAssistantsController)
assistantsRoutes.post('/create', createAssistantController)
assistantsRoutes.put('/edit/:id', editAssistantController)
assistantsRoutes.delete('/edit/:id', deleteAssistantController)

export { assistantsRoutes }
