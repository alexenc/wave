//userlicce
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isPending: false,
    error: false,
  },
  reducers: {
    //object containing the actions for the slice
    updateUserStart: (state) => {
      state.isPending = true;
    },
    updateUserSuccess: (state, action) => {
      state.isPending = false;
      state.user = action.payload;
    },
    updateUserFailure: (state) => {
      state.error = true;
      state.isPending = false;
    },
  },
});

//we export every action to then use it on the pages
export const { updateUserStart, updateUserSuccess, updateUserFailure } =
  userSlice.actions;
//export reducers
export default userSlice.reducer;
