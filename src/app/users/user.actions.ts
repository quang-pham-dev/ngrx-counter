import {
  USERS_FETCH_SUCCESSFUL,
  ERROR_FETCHING_USERS,
  FETCHING_USERS,
} from './user.constants';
export const usersFetchSuccessful = (users: any) => ({
  type: USERS_FETCH_SUCCESSFUL,
  payload: users,
});
export const fetchError = (error: any) => ({
  type: ERROR_FETCHING_USERS,
  payload: error,
});

export const fetchingUsers = () => ({ type: FETCHING_USERS });
