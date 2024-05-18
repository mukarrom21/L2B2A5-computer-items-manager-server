import { error } from 'console'
import { RequestHandler } from 'express'
import httpStatus from 'http-status'

// express custom not found middleware
const notFound: RequestHandler = (req, res, next) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    error: 'Api route not found, please check again',
  })
}

export default notFound
