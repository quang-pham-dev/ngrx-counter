import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { FETCHING_USERS } from './user.constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, catchError, switchMap } from 'rxjs/operators';
import { usersFetchSuccessful, fetchError } from './user.actions';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
@Injectable()
export class UserEffects {
  @Effect()
  users$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_USERS),
    switchMap((action) =>
      this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        delay(3000),
        map(usersFetchSuccessful),
        catchError((err) => of(fetchError(err)))
      )
    )
  );
  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log('user effects initialized');
  }
}
