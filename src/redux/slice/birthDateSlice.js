import { createSlice } from "@reduxjs/toolkit";

export const birthDateSlice = createSlice({
  name: "birthDate",
  initialState: {
    birthDate: null,
  },
  reducers: {
    addBirthDate: (state, action) => {
      state.birthDate = action.payload;
    },
  },
});

export const { addBirthDate } = birthDateSlice.actions;
export default birthDateSlice.reducer;
