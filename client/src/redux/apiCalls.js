// importar reducers del slice
import { updateStart, updateSuccess, updateFailure } from "./eventSlice";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./userSlice";

import axiosClient from "../axiosConfig";

const url = process.env.SERVER_URL;

export const getEvents = async (dispatch) => {
  dispatch(updateStart());

  try {
    const res = await axiosClient.get("/event/active");
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
    localStorage.setItem("token", res.data.accessToken);
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const userRegister = async (user, dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await axiosClient.post("/user/", user.user);
    dispatch(updateUserSuccess(res.data));
    localStorage.setItem("token", res.data.accessToken);
  } catch (error) {
    dispatch(updateUserFailure());
  }
};

export const createCheckout = async () => {
  try {
    const res = await axiosClient.post("/checkout/create-checkout-session");
    window.location(res.data);
  } catch (error) {
    console.log(error);
  }
};
