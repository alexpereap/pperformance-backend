/**
 * Creates an instance of API error
 *
 * @class
 * @name ApiError
 * @kind class
 * @extends Error
 */
class ApiError extends Error {
  private isOperational: boolean;
  private statusCode: number;

  constructor(
    statusCode: number,
    message: string,
    isOperational: boolean = true,
    stack: string = ""
  ) {
    super(message);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

export default ApiError;
