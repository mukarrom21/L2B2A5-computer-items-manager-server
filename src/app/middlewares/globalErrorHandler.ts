import { ErrorRequestHandler } from 'express'
import httpStatus from 'http-status'
import config from '../config'
import { IErrorSource } from '../interface'
import { ZodError } from 'zod'
import handleZodError from '../errors/handleZodError'
import handleValidationError from '../errors/handleValidationError'
import handleCastError from '../errors/handleCastError'
import handleDuplicateError from '../errors/handleDuplicateError'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
  let errorMessage = err.message || 'Something went wrong'
  let errorSources: IErrorSource[] = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ]
  let errorDetails = err.error || null

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError?.statusCode
    errorMessage = simplifiedError?.message
    errorSources = simplifiedError?.errorSources
  } else if (err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError?.statusCode
    errorMessage = simplifiedError?.message
    errorSources = simplifiedError?.errorSources
  } else if (err.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError?.statusCode
    errorMessage = simplifiedError?.message
    errorSources = simplifiedError?.errorSources
  } else if (err.code && err.code === 11000) {
    const simplifiedError = handleDuplicateError(err)
    statusCode = simplifiedError?.statusCode
    errorMessage = simplifiedError?.message
    errorSources = simplifiedError?.errorSources
  }
  return res.status(statusCode).json({
    success: false,
    message: err.message,
    errorSources: errorSources,
    errorDetails, // error in details
    stack: config.node_env === 'development' ? err.stack : null,
  })
}

export default globalErrorHandler
