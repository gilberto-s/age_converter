import Joi from "joi"

export default Joi.object({
    body: Joi.object({
        seconds: Joi.number().greater(0).required(),
        type: Joi.string().lowercase().required(),
    }).required(),
})
