class AppError extends Error {
  // store http status code
  public statusCode: number

  // constructor parameters
  constructor(statusCode: number, message: string, stack = '') {
    super(message)

    this.statusCode = statusCode
    // check if custom stack trace is passed
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default AppError
