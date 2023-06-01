import {Router} from 'restify-router'
import bootcampRoute from './bootcamp.router'

const PrincipalRouter = new Router()

PrincipalRouter.add('/api/v1', bootcampRoute)

export default PrincipalRouter