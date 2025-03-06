import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
