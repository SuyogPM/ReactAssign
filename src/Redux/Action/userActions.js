import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../Constants/userActionConstant";

export const addUser = (usersData) => ({
  type: ADD_USER,
  payload: usersData,
});

export const updateUser = (userId, usersData) => ({
  type: UPDATE_USER,
  payload: { id: userId, userData: usersData },
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});
