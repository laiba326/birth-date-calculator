import { configureStore } from "@reduxjs/toolkit";
import birthDate from "../slice/birthDateSlice";
import currentDate from "../slice/currentDateSlice"
export default configureStore({
  reducer: { birthDate, currentDate },
});
