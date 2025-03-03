import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  channelId: null,
  channelName: "本を選んでください",
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers : {
    installChat: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { installChat } = chatSlice.actions; 
export default chatSlice.reducer