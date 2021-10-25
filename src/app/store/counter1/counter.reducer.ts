import {
  incrementAction,
  decrementAction,
  resetAction,
} from './counter.action';
import { createReducer, on } from '@ngrx/store';

export const initialCountState = 0;

const _countReducer = createReducer(
  initialCountState,
  on(incrementAction, (state, payload) => state + 1),
  on(decrementAction, (state) => state - 1),
  on(resetAction, () => 0)
);

export const countReducer = (state: any, action: any) =>
  _countReducer(state, action);
