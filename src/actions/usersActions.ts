import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/userTypes";
import { ISingleUser } from "../entities/users";

export const getUsers = (): Promise<ISingleUser[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();
    dispatch({
      type: actionTypes.GET_USERS,
      usersList,
    });
  }) as any;
  
  export const getUsersPhotos = (): Promise<ISingleUser[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const usersPhotos = await response.json();
    dispatch({
      type: actionTypes.GET_PHOTOS,
      usersPhotos,
    });
  }) as any;
