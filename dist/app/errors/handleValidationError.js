"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    // Extract error sources from the validation error object
    const errorSources = Object.values(err.errors).map((val) => {
        return {
            path: val?.path, // Extract the path of the error source
            message: val?.message, // Extract the error message
        };
    });
    // Set a default HTTP status code for validation errors
    const statusCode = 400;
    // Return a generic error response with the extracted information
    return {
        statusCode,
        message: 'Validation Error',
        errorSources,
    };
};
// Export the function for use in other modules
exports.default = handleValidationError;
