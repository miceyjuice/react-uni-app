import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/userTypes";
import {
  ISingleUser,
  ISingleUserComment,
  ISingleUserPhoto,
  ISingleUserPost,
} from "../entities/users";

export const getUsers = (): Promise<ISingleUser[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();
    dispatch({
      type: actionTypes.GET_USERS,
      usersList,
    });
  }) as any;

export const getUsersPhotos = (): Promise<ISingleUserPhoto[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const usersPhotos = await response.json();
    dispatch({
      type: actionTypes.GET_PHOTOS,
      usersPhotos,
    });
  }) as any;

export const getUsersPosts = (): Promise<ISingleUserPost[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const userPosts = await response.json();
    dispatch({
      type: actionTypes.GET_POSTS,
      userPosts,
    });
  }) as any;

export const getUsersComments = (): Promise<ISingleUserComment[]> =>
  (async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const usersComments = await response.json();
    dispatch({
      type: actionTypes.GET_COMMENTS,
      usersComments,
    });
  }) as any;
