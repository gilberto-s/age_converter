import httpStatusEnum from '../enums/httpStatus.js';
import BaseError from './base.js';

class BadRequestError extends BaseError {
    constructor(message) {
        super(message)
        this.status = httpStatusEnum.BAD_REQUEST;
    }
}

class PreConditionFailedError extends BaseError {
    constructor(message) {
        super(message)
        this.status = httpStatusEnum.PRECONDITION_FAILED;
    }
}

class InternalServerError extends BaseError {
    constructor(message, status) {
        super(message)
        this.status = status || httpStatusEnum.INTERNAL_SERVER_ERROR;
    }
}

class NotFoundError extends BaseError {
    constructor(message) {
        super(message)
        this.status = httpStatusEnum.NOT_FOUND;
    }
}

export {
    NotFoundError,
    BadRequestError,
    InternalServerError,
    PreConditionFailedError,
};
