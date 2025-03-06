"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    message: {
        type: String,
        required: true
    },
    user: {
        email: String,
        id: String,
        name: String,
        photo: String
    },
}, { timestamps: true });
const channelSchema = new mongoose_1.default.Schema({
    channelName: {
        type: String,
        required: true
    },
    messages: [messageSchema],
}, { timestamps: true });
exports.Channel = mongoose_1.default.model('Channel', channelSchema);
