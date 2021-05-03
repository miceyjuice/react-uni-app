import { ISingleUserPhoto } from "../entities/users";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersPhotosReducer {
  usersPhotosList: ISingleUserPhoto[];
}

const defaultState = (): IUsersPhotosReducer => ({
  usersPhotosList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_PHOTOS: {
      const payload: actionTypes.IUserTypes["GET_PHOTOS"] = action;
      return {
        ...state,
        usersPhotosList: payload.usersPhotos,
      };
    }

    default: {
        return state;
    }
  }
};
