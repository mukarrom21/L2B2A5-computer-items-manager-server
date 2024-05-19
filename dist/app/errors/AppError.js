"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    // constructor parameters
    constructor(statusCode, message, stack = '') {
        super(message);
        this.statusCode = statusCode;
        // check if custom stack trace is passed
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.default = AppError;
