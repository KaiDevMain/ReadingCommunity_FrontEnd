import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import chatSlice from "./Slice/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
  },
});

export type TypeDispatch = typeof store.dispatch;
export type TypeState = ReturnType<typeof store.getState>;