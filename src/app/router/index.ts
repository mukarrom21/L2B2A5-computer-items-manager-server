import { Router } from 'express'
import { UserRoutes } from '../modules/User/user.route'
const router = Router()

interface IModuleRoute {
  path: string
  route: Router
}
const moduleRoutes: IModuleRoute[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route)
})

export default router
