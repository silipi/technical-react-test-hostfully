import { configureStore } from '@reduxjs/toolkit';
import property from './slices/property';
import booking from './slices/booking';

export const store = configureStore({
  reducer: {
    property,
    booking,
  },
});
