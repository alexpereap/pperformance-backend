import winston from "winston";
const { format, createLogger, transports } = winston;
import { TransformableInfo } from "logform";
const { combine, timestamp, printf, colorize } = format;

const winstonFormat = printf(
  ({ level, message, timestamp, stack }: TransformableInfo) => {
    return `${timestamp}: ${level}: ${stack || message}`;
  }
);

export default createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    timestamp(),
    process.env.NODE_ENV === "production"
      ? winstonFormat
      : combine(colorize(), winstonFormat)
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: __dirname + "/../logs/error.log",
      level: "error",
    }),
  ],
});
