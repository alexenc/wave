import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    event: eventReducer,
    user: userReducer,
  },
});
