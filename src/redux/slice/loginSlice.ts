// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, payload) => {
        console.log("first=>", payload)
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
console.log("counterSlice", counterSlice)
export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;