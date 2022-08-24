import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    create: (state, action) => {
      state.bookings.push(action.payload);
    },
    update: (state, action) => {
      const newBookings = state.bookings.map((b) => {
        if (b.id === action.payload.id) {
          return action.payload;
        }

        return b;
      });

      state.bookings = newBookings;
    },
  },
});

export const { create, update } = bookingSlice.actions;

export default bookingSlice.reducer;
