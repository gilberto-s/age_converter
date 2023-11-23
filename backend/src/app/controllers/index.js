import planets from "../resources/planets"
import { timeConverterService } from "../services"
import HealthCheckController from "./health.controller"
import TimeConverterController from "./timeConverter.controller"

const healthController = new HealthCheckController()
const timeConverterController = new TimeConverterController(timeConverterService, planets)

export {
  healthController,
  timeConverterController
}