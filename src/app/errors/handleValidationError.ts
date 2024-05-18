import mongoose from 'mongoose'
import { IErrorSource, IGenericErrorResponse } from '../interface'

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  // Extract error sources from the validation error object
  const errorSources: IErrorSource[] = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path, // Extract the path of the error source
        message: val?.message, // Extract the error message
      }
    },
  )

  // Set a default HTTP status code for validation errors
  const statusCode = 400

  // Return a generic error response with the extracted information
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  }
}

// Export the function for use in other modules
export default handleValidationError
