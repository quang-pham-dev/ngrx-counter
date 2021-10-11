import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { incrementAction } from './counter.action';
import { initialCountState } from './counter.reducer';

// Subject and Observable for getting selected training
const selectedCount = new BehaviorSubject<any>(initialCountState);
const selectedCount$ = selectedCount.asObservable();

/**
 * Function to return observable for listening to the selected training in store
 */
export const getSelectedCount = () => selectedCount$;

@Injectable()
export class CounterEffect {
  incrementCounterEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(incrementAction),
        tap((res) => {
          console.log('action:', res);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
