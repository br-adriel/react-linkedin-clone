import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type StateType = { user: null | User };

type ReducersType = {
  login: (
    state: { user: User | null },
    action: {
      payload: User | null;
      type: string;
    }
  ) => void;
  logout: (state: { user: User | null }) => void;
};

export const userSlice = createSlice<StateType, ReducersType>({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
