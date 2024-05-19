"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
// express custom not found middleware
const notFound = (req, res, next) => {
    return res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        error: 'Api route not found, please check again',
    });
};
exports.default = notFound;