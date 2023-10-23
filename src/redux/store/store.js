import { configureStore } from "@reduxjs/toolkit";
import birthDate from "../slice/birthDateSlice";
export default configureStore({
  reducer: { birthDate },
});
