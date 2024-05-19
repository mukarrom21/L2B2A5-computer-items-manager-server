"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a utility function to send a standardized response
const sendResponse = (res, data) => {
    // Send the response with the standardized format
    res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        meta: data.meta,
        data: data.data,
    });
};
// Export the sendResponse utility function for use in other modules
exports.default = sendResponse;
