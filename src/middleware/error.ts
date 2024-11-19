import { StatusCodes } from "http-status-codes";
import logger from "../config/logger";
import express, { Express, Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { statusCode, message } = err;
  if (process.env.NODE_ENV == "procution" && !err.isOperational) {
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    message = statusCode[statusCode];
  }

  const response = {
    error: true,
    code: statusCode,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };

  res.locals.errorMessage = message;
  logger.error(err);

  res.status(statusCode).send(response);
};

export default errorHandler;
