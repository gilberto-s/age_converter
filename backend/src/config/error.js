import AttributeError from "../app/errors/attribute.error"

export default {
    onError: (error) => {
        if (error instanceof AttributeError) {
            return error
        }
        return { message: "Internal Server Error" }
    },
    captureReturnedErrors: true,
    forwardErrors: true,
}
