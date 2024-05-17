import {ADD_DATA  } from "../Constants/userActionConstant";

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});
