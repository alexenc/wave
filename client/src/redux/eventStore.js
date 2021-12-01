import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

export default configureStore({
  reducer: {
    user: eventReducer,
  },
});
