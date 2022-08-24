import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [
    {
      id: 1,
      title: 'Beach House',
      description: 'Lorem ipsum dolor sit.',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&dl=vu-anh-TiVPTYCG_3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      price: 200,
    },
    {
      id: 2,
      title: 'Nice Looking House',
      description: 'Lorem ipsum dolor sit.',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&dl=vu-anh-TiVPTYCG_3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      price: 150,
    },
  ],
  selectedProperty: null,
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedProperty } = propertySlice.actions;

export default propertySlice.reducer;
