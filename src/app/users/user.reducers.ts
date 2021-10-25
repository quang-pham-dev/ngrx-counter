import {
  USERS_FETCH_SUCCESSFUL,
  ERROR_FETCHING_USERS,
  FETCHING_USERS
} from "./user.constants";
import { User } from "./user.model";
import { ActionReducerMap } from "@ngrx/store/src/models";
import { Action } from '@ngrx/store';

const initialState = {
  loading: false,
  list: null,
  error: null
};
export interface UserState {
  loading: boolean;
  list: Array<User>;
  error: string;
}
export interface FeatureUsers {
  users: UserState;
}
export const UserReducers: ActionReducerMap<FeatureUsers> = {
  users: userReducer
};
export function userReducer(state: any, action: any) {
  switch (action.type) {
    case USERS_FETCH_SUCCESSFUL:
      return { ...state, list: action.payload, loading: false };
    case ERROR_FETCHING_USERS:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_USERS:
      return { ...state, loading: true };
    default:
      return state;
  }
}