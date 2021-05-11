import {
  ISingleUserPost,
  ISingleUser,
  ISingleUserPhoto,
  ISingleUserComment,
} from "../../entities/users";
export const GET_USERS = "GET_USERS";
export const GET_PHOTOS = "GET_PHOTOS";
export const GET_POSTS = "GET_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";

export interface IUserTypes {
  GET_USERS: {
    usersList: ISingleUser[];
  };
  GET_PHOTOS: {
    usersPhotos: ISingleUserPhoto[];
  };
  GET_POSTS: {
    userPosts: ISingleUserPost[];
  };
  GET_COMMENTS: {
    usersComments: ISingleUserComment[];
  };
}
