import { ISingleUserPost } from "../entities/users";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersPostsReducer {
  usersPostsList: ISingleUserPost[];
}

const defaultState = (): IUsersPostsReducer => ({
    usersPostsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_POSTS: {
      const payload: actionTypes.IUserTypes["GET_POSTS"] = action;
      return {
        ...state,
        usersPostsList: payload.userPosts,
      };
    }

    default: {
      return state;
    }
  }
};
