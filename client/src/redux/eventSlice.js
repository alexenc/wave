//userlicce
import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    event: [],
    isPending: false,
    error: false,
  },
  reducers: {
    //object containing the actions for the slice
    updateStart: (state) => {
      state.isPending = true;
    },
    updateSuccess: (state, action) => {
      state.isPending = false;
      state.event = action.payload;
    },
    updateFailure: (state) => {
      state.error = true;
    },
  },
});

//we export every action to then use it on the pages
export const { updateStart, updateSuccess, updateFailure } = eventSlice.actions;
//export reducers
export default eventSlice.reducer;
