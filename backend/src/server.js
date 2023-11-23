import app from "./app"
import logger from "./config/logger"

const port = process.env.PORT || 8001

app.listen(port, () => {
    logger.info(`Server up and running on port: ${port}`)
})
