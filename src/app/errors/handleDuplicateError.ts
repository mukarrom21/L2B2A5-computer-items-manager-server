import { IErrorSource, IGenericErrorResponse } from '../interface'

const handleDuplicateError = (err: any): IGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/)

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1]

  // Create an error source with the extracted message
  const errorSources: IErrorSource[] = [
    {
      path: '', // The path is empty as it's a general error
      message: `${extractedMessage} is already exists`, // Use the extracted message in the error response
    },
  ]

  // Set a default HTTP status code for duplicate errors
  const statusCode = 400

  // Return a generic error response with the extracted information
  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  }
}

// Export the function for use in other modules
export default handleDuplicateError
