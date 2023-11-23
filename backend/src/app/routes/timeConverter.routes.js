import express from "express"
import { timeConverterController } from "../controllers"
import validatorMiddleware from "../middlewares/validator.middleware"
import convertInputSchema from "../schemas/convertInput.schema"

const routes = express.Router()

routes.post("/convert", validatorMiddleware(convertInputSchema), (req, res) => {
  /*
    #swagger.tags = ['Converter']
    #swagger.summary = 'Convert time'
    #swagger.parameters['convertPayload'] = {
        in: 'body',
        type: "object",
        schema: {
            "seconds": 2500000000,
            "type": "Earth",
        }
    }
    #swagger.responses[200] = {
        description: 'Success',
        schema: {
            "input": {
              "seconds": 2500000000,
              "type": "Earth", 
            },
            "output": {
              "conversion": 79.22,
              "calc": 79.22
            }
        }
    }
    #swagger.responses[500] = {
        description: 'Unexpected error',
        schema: {
            "message": 'internal server error'
        }
    }
    */
    timeConverterController.execute(req, res)
})

export default routes
