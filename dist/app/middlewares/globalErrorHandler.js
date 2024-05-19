"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR;
    let errorMessage = err.message || 'Something went wrong';
    let errorSources = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];
    let errorDetails = err.error || null;
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        errorMessage = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err.name === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        errorMessage = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err.name === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        errorMessage = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err.code && err.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError?.statusCode;
        errorMessage = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    return res.status(statusCode).json({
        success: false,
        message: err.message,
        errorSources: errorSources,
        errorDetails, // error in details
        stack: config_1.default.node_env === 'development' ? err.stack : null,
    });
};
exports.default = globalErrorHandler;
