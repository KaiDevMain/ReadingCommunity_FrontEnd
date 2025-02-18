import { createSlice } from '@reduxjs/toolkit';
import reducer from './chatSlice';

interface User {
  email: string;
  id: string;
  name: string;
  photo: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers : {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;


