import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import usersPhotosList, { IUsersPhotosReducer } from './usersPhotosReducers';
import usersPostsList, { IUsersPostsReducer } from './usersPostsReducers';

export default combineReducers({
    users,
    usersPhotosList,
    usersPostsList
});

export interface IState {
    users: IUsersReducer;
    usersPhotosList: IUsersPhotosReducer;
    usersPostsList: IUsersPostsReducer;
}