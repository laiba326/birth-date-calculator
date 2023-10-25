import { createSlice } from "@reduxjs/toolkit";

export const currentDateSlice = createSlice({
  name: "currentDate",
  initialState: {
    currentDate: null,
  },
  reducers: {
    addCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const { addCurrentDate } = currentDateSlice.actions;
export default currentDateSlice.reducer;