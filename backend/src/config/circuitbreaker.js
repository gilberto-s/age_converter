import opossum from "opossum"
import logger from "./logger"

class CircuitBreaker {
    constructor() {
        this.defaults = {
            errorThresholdPercentage: 50,
            timeout: parseInt(process.env.CIRCUITBREAKER_TIMEOUT),
            resetTimeout: parseInt(process.env.CIRCUITBREAKER_RESET_TIMEOUT),
        }
    }

    async circuit(req, res, operation) {
        const breaker = new opossum(await operation, this.defaults)

        breaker.on("halfOpen", () => {
            logger.info("Circuit breaker is halfOpen")
        })
        breaker.on("open", () => {
            logger.info("Circuit breaker is open")
        })
        breaker.on("close", () => {
            logger.info("Circuit breaker is closed")
        })

        return breaker
            .fire(req, res)
            .then((data) => data)
            .catch((err) =>
                res.status(err.status || 500).send({ message: err.message })
            )
    }
}

export default new CircuitBreaker()
