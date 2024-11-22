import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../redux/taskslice';
import userReducer from './userslice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
  },
});

export default store;