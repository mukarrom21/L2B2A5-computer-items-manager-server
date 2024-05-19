"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a utility function to catch asynchronous errors in route handlers
const catchAsync = (fn) => {
    // Return a new function that wraps the original route handler
    return (req, res, next) => {
        // Resolve the promise returned by the original route handler
        Promise.resolve(fn(req, res, next)).catch(err => next(err));
    };
};
// Export the catchAsync utility function for use in other modules
exports.default = catchAsync;
