import { configureStore } from "@reduxjs/toolkit";
import currentDate from "../slice/currentDateSlice";
export default configureStore({
  reducer: { currentDate },
});
