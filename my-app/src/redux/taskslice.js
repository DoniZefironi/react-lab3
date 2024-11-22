import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addfood(state, action) {
      state.items.push(action.payload);
    },
    updatefood(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      } else {
        state.error = 'Food item not found';
      }
    },
    removefood(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addfood, updatefood, removefood, setError } = foodSlice.actions;
export default foodSlice.reducer;