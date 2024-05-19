import { IUser } from './user.interface'
import UserModel from './user.model'

const createNewUserService = async (payload: IUser) => {
  // const { name, email, password, role } = payload
  const result = await UserModel.create(payload)

  return result
}

export const UserServices = { createNewUserService }
