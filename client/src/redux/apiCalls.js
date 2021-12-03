// importar reducers del slice
import { updateStart, updateSuccess, updateFailure } from "./eventSlice";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./userSlice";
import axios from "axios";
import axiosClient from "../axiosConfig";

const url = process.env.SERVER_URL;

export const getEvents = async (dispatch) => {
  dispatch(updateStart());

  try {
    const res = await axiosClient.get("/event/");
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateFailure());
  }
};

export const userLogin = async (user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await axiosClient.post("/user/login", user.user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
