import { ISingleUserComment } from "../entities/users";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersCommentsReducer {
  usersCommentsList: ISingleUserComment[];
}

const defaultState = (): IUsersCommentsReducer => ({
  usersCommentsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS: {
      const payload: actionTypes.IUserTypes["GET_COMMENTS"] = action;
      return {
        ...state,
        usersCommentsList: payload.usersComments,
      };
    }

    default: {
      return state;
    }
  }
};
