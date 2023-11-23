import dotenv from "dotenv"

import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import routes from "./routes"
import logger from "./config/logger"

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

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(morgan("tiny", { stream: logger.stream.write }))
        this.server.use(
            cors({
                origin: process.env.CORS_ORIGIN || "*",
                methods: "GET,HEAD,PATCH,POST,DELETE,PUT",
                optionsSuccessStatus: 204,
            })
        )
        this.server.use(express.json())

        this.server.use(helmet.frameguard({ action: "deny" }))
        this.server.use(helmet.hidePoweredBy())
        this.server.use(helmet.noSniff())
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server
