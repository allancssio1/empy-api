import { createClientController } from '@/app/http/controllers/clients/createClient'
import { deleteClientController } from '@/app/http/controllers/clients/deleteClient'
import { editClientController } from '@/app/http/controllers/clients/editClient'
import { linkUnlinkClientController } from '@/app/http/controllers/clients/linkUnlinkClient'
import { listClientLinkedController } from '@/app/http/controllers/clients/listClientLinked'
import { listClientUnlinkedController } from '@/app/http/controllers/clients/listClientUnlinked'
import { Router } from 'express'

const clientsRoutes = Router()

clientsRoutes.get('/list-unlinked', listClientUnlinkedController)
clientsRoutes.get('/list/:assistantId', listClientLinkedController)
clientsRoutes.post('/create', createClientController)
clientsRoutes.put('/:id/edit', editClientController)
clientsRoutes.put('/clientId/assistantId', linkUnlinkClientController)
clientsRoutes.delete('/:id/delete', deleteClientController)

export { clientsRoutes }
