import { createAction, props } from '@ngrx/store';

export const incrementAction = createAction(
  '[counter] increment',
  props<{ counter: number }>()
);
export const decrementAction = createAction('[counter] decrement');
export const resetAction = createAction('[counter] reset');
