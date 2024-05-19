import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const createNewUserController = catchAsync(async (req, res) => {
  const result = await UserServices.createNewUserService(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'user created successfully',
    data: result,
  })
})

export const UserControllers = { createNewUserController }
