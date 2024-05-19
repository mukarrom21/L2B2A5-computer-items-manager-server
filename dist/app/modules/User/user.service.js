"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createNewUserService = async (payload) => {
    // const { name, email, password, role } = payload
    const result = await user_model_1.default.create(payload);
    return result;
};
exports.UserServices = { createNewUserService };
