import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import usersPhotosList, { IUsersPhotosReducer } from './usersPhotosReducers';

export default combineReducers({
    users,
    usersPhotosList
});

export interface IState {
    users: IUsersReducer;
    usersPhotosList: IUsersPhotosReducer;
}