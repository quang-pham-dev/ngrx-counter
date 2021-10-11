import { createReducer, on } from "@ngrx/store";
import {
  incrementAction2,
  decrementAction2,
  resetAction2
} from "./counter2.action";

export const initialState = 0;

const _countReducer = createReducer(
  initialState,
  on(incrementAction2, state => state + 1),
  on(decrementAction2, state => state - 1),
  on(resetAction2, () => 0)
);

export const count2Reducer = (state: any, action: any) => _countReducer(state, action);
