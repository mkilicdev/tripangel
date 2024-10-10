import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../features/destinations/destinationSlice';

const store = configureStore({
  reducer: {
    destinations: destinationReducer,
  },
});

export default store;
