import express from "express"
import swaggerUi from "swagger-ui-express"

import healthRoutes from "./app/routes/health.routes"
import timeConverterRoutes from "./app/routes/timeConverter.routes"

import swaggerFile from "./docs/swagger.json"

const routes = express.Router()

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerFile));

routes.use(healthRoutes)
routes.use(timeConverterRoutes)

export default routes
