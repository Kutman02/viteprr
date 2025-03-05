import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 5,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeValue: (state) => {
      console.log(state.value);
      state.value = 5;
      console.log(state.value);
    },
  },
});

export default counterSlice.reducer;
export const { changeValue } = counterSlice.actions;
