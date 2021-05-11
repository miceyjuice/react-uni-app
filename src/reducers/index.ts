import { combineReducers } from "redux";

import users, { IUsersReducer } from "./usersReducers";
import usersPhotosList, { IUsersPhotosReducer } from "./usersPhotosReducers";
import usersPostsList, { IUsersPostsReducer } from "./usersPostsReducers";
import usersCommentsList, {
  IUsersCommentsReducer,
} from "./usersCommentsReducers";

export default combineReducers({
  users,
  usersPhotosList,
  usersPostsList,
  usersCommentsList,
});

export interface IState {
  users: IUsersReducer;
  usersPhotosList: IUsersPhotosReducer;
  usersPostsList: IUsersPostsReducer;
  usersCommentsList: IUsersCommentsReducer;
}
