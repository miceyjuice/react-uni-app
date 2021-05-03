import { ISingleUser, ISingleUserPhoto } from '../../entities/users';
export const GET_USERS = 'GET_USERS';
export const GET_PHOTOS = 'GET_PHOTOS';

export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    },
    GET_PHOTOS: {
        usersPhotos: ISingleUserPhoto[]
    },
}