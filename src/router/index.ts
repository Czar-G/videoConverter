import {Router} from 'restify-router'
import videoRouter from './video.router'

const PrincipalRouter = new Router()

PrincipalRouter.add('/api/v1', videoRouter)

export default PrincipalRouter