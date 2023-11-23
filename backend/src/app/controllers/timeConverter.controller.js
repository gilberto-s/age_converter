import CircuitBreaker from "../../config/circuitbreaker";
import logger from "../../config/logger";
import httpStatusEnum from "../enums/httpStatus";
import { InternalServerError, NotFoundError } from "../errors/apperrors";

class TimeConverterController {
    constructor(timeConverterService, planets) {
      this.timeConverterService = timeConverterService
      this.planets = planets
    }

    async execute(req, res) {
        await CircuitBreaker.circuit(req, res, async (req, res) => {
            try {
                const { seconds, type } = req.body

                const planet = this.planets[type]

                if (!planet) throw new NotFoundError(`Planet of type '${type}' not found`)

                const conversion = this.timeConverterService.convert(seconds, planet)
                const calc = this.timeConverterService.caculate(seconds, planet)

                return res.status(httpStatusEnum.OK).send({
                  input: { seconds, planet },
                  output: { conversion, calc }
                })
            } catch (error) {
                logger.error(
                    `Error converting time. Error: ${error.status}`
                )
                throw new InternalServerError(error.message, error.status || httpStatusEnum.INTERNAL_SERVER_ERROR)
            }
        })
    }
}

export default TimeConverterController
