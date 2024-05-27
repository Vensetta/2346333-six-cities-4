import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData } from '../../types/comment';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.NoAuth;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;