"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
// Read .env file if it exists
(0, dotenv_1.config)({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    node_env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};
