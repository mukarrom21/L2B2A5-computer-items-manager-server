"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
// Define a middleware function to validate incoming requests against a Zod schema
const validateRequest = (schema) => {
    // Use the catchAsync utility to handle asynchronous operations and errors
    return (0, catchAsync_1.default)(async (req, res, next) => {
        // Parse and validate the request data against the provided schema
        await schema.parseAsync({
            body: req.body, // Validate request body
            cookies: req.cookies, // Validate request cookies
        });
        // Move to the next middleware or route handler if validation succeeds
        next();
    });
};
// Export the middleware for use in other modules
exports.default = validateRequest;
