import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByVlaue: (state, action) => {
      state.value += Number(action.payload);
    },
    reduceeByValue: (state, action) => {
      state.value -= Number(action.payload);
    },
  },
});
export const { increment, decrement, addByVlaue, reduceeByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
