import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chatRouter from './routes/chat';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; 

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());
mongoose.connect(process.env.MONGODB_URL!)
.then(() => console.log('mongoose接続完了'))
.catch(err =>console.error('mongoose接続エラー', err));

const PORT = process.env.PORT || 5000;
const io = new Server(server, {
    cors: { origin: "http://localhost:3000" }
})

app.use('/channels', chatRouter(io as Server));

io.on("connection", (socket) => {
    console.log("クライアント接続しました")
    socket.on("disconnect", () => {
    console.log("クライアントと接続が切れました")
    });
});

server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});