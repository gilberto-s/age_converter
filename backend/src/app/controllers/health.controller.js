import CircuitBreaker from "../../config/circuitbreaker";
import logger from "../../config/logger";
import httpStatusEnum from "../enums/httpStatus";
import { InternalServerError } from "../errors/apperrors";

class HealthCheckController {
    async status(req, res) {
        await CircuitBreaker.circuit(req, res, async (_, res) => {
            try {
                return res.status(200).send({ message: "ok" })
            } catch (error) {
                logger.error(
                    `Error checking health status. Error: ${error.message}`
                )
                throw new InternalServerError(err.message, httpStatusEnum.INTERNAL_SERVER_ERROR)
            }
        })
    }
}

export default HealthCheckController
