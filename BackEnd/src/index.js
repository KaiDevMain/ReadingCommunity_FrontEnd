"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const chat_1 = __importDefault(require("./routes/chat"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
dotenv.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
app.use((0, cors_1.default)({
    origin: "http://localhost:3000"
}));
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log('mongoose接続完了'))
    .catch(err => console.error('mongoose接続エラー', err));
const PORT = process.env.PORT || 5003;
const io = new socket_io_1.Server(server, {
    cors: { origin: "http://localhost:3000" }
});
app.use('/channels', (0, chat_1.default)(io));
io.on("connection", (socket) => {
    console.log("クライアント接続しました");
    socket.on("disconnect", () => {
        console.log("クライアントと接続が切れました");
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
