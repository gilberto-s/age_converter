import dotenv from "dotenv"
import winston from "winston"

if (!process.env.NODE_ENV || ["test", "local"].includes(process.env.NODE_ENV)) {
  let path
  switch (process.env.NODE_ENV) {
      case "test":
          path = ".env.test"
          break
      default:
          path = ".env"
  }
  dotenv.config({ path })
}

const { createLogger, format, transports } = winston
const { combine, timestamp, label, printf } = format

const loggerFormat = printf(
    ({ level, message, label, timestamp }) =>
        `${timestamp} [${label}] ${level}: ${message}`
)

const logger = createLogger({
    transports: [
        new transports.Console({
            format: combine(
                label({ label: process.env.LOGGER }),
                timestamp(),
                loggerFormat
            ),
            level: process.env.LOGLEVEL.toLowerCase(),
            handleExceptions: true,
            json: false,
            colorize: true,
        }),
    ],
    exitOnError: false,
})

export default logger
