import { AppState } from '../app-state';
export const getList = (state: AppState) => state.featureUsers.users.list;
export const getError = (state: AppState) => state.featureUsers.users.error;
export const isLoading = (state: AppState) => state.featureUsers.users.loading;
