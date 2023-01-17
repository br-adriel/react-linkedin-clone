import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './couter/counterSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
