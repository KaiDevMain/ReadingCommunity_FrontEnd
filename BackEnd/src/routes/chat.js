"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Chat_1 = require("../models/Chat");
const chatRouter = (io) => {
    const router = express_1.default.Router();
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const channels = yield Chat_1.Channel.find().sort({ createdAt: -1 });
            res.json(channels);
        }
        catch (error) {
            res.status(500).json({ message: 'エラーです' + error });
        }
    }));
    router.get('/:channelId/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const channel = yield Chat_1.Channel.findById(req.params.channelId);
            if (!channel) {
                res.status(404).json({ message: 'チャンネルがありません' });
                return;
            }
            const messages = channel.messages.map(msg => ({
                message: msg.message,
                user: msg.user,
                createdAt: msg.createdAt
            }));
            res.status(200).json({
                channelId: channel._id,
                messages: messages
            });
        }
        catch (error) {
            res.status(500).json({ message: 'エラーです: ' + error });
        }
    }));
    router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { channelName } = req.body;
            const newChannel = new Chat_1.Channel({ channelName });
            yield newChannel.save();
            io.emit('channelAdded_socket', {
                _id: newChannel._id,
                channelName: newChannel.channelName,
                createdAt: newChannel.createdAt,
            });
            res.status(201).json({
                _id: newChannel._id,
                channelName: newChannel.channelName,
                createdAt: newChannel.createdAt,
            });
        }
        catch (error) {
            res.status(500).json({ message: 'エラーです' + error });
        }
    }));
    router.post('/:channelId/messages', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { message, user } = req.body;
            const channel = yield Chat_1.Channel.findById(req.params.channelId);
            if (!channel) {
                return res.status(404).json({ message: 'チャンネルがありません' });
            }
            const newMessage = { message, user, createdAt: new Date() };
            channel.messages.push(newMessage);
            yield channel.save();
            const updatedChannel = yield Chat_1.Channel.findById(req.params.channelId);
            if (!updatedChannel) {
                return res.status(404).json({ message: 'チャンネルが見つかりません（更新後）' });
            }
            const savedMessage = channel.messages[channel.messages.length - 1];
            io.emit('newMessage_socket', { channelId: channel._id, message: savedMessage });
            res.status(201).json(newMessage);
        }
        catch (error) {
            res.status(500).json({ message: 'エラーです' + error });
        }
    })));
    return router;
};
exports.default = chatRouter;
