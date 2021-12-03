// importar reducers del slice
import { updateStart, updateSuccess, updateFailure } from "./eventSlice";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./userSlice";
import axios from "axios";

export const getEvents = async (dispatch) => {
  dispatch(updateStart());

  try {
    const res = await axios.get("http://localhost:3000/v1/event/");
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateFailure());
  }
};

export const userLogin = async (user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await axios.post(
      "http://localhost:3000/v1/user/login",
      user.user
    );
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
