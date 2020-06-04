import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()

routes.get('/items', new ItemsController().index)

routes.post('/points', new PointsController().create)
routes.get('/points/:id', new PointsController().show)
routes.get('/points/', new PointsController().index)

export default routes
