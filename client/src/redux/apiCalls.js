// importar reducers del slice
import { updateStart, updateSuccess, updateFailure } from "./eventSlice";
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

//crear export const con la logica de cada llamada a la api usando dispatch
