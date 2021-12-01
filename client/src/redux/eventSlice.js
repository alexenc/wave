//userlicce
import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    name: "alex",
    email: "alex@gmail.com",
  },
  reducers: {
    //object containing the actions for the slice
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => {
      state = null;
    },
    addHello: (state, action) => {
      state.name = "Hello " + action.payload.name;
    },
  },
});

//we export every action to then use it on the pages
export const { update, remove, addHello } = eventSlice.actions;
//export reducers
export default eventSlice.reducer;
