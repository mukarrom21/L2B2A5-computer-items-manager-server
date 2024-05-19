import { Router } from 'express'
import { UserControllers } from './user.controller'

const router = Router()

router.post('/', UserControllers.createNewUserController)

export const UserRoutes = router
