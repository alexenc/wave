import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

export default configureStore({
  reducer: {
    event: eventReducer,
  },
});
