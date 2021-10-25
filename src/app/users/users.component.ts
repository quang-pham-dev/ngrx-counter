import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { fetchingUsers } from './user.actions';
import { getList, isLoading, getError } from './user.selector';
@Component({
  selector: 'users',
  template: `
    Users:
    <div *ngFor="let user of users$ | async">
      {{ user.email }}
    </div>
    <div *ngIf="loading$ | async; let loading">
      <div *ngIf="loading">fetching users...</div>
    </div>
    <div *ngIf="error$ | async; let error">
      <div *ngIf="error">{{ error }}</div>
    </div>
  `,
})
export class UserComponent implements OnInit {
  users$: any;
  loading$: any;
  error$: any;
  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }
  ngOnInit() {
    this.store.dispatch(fetchingUsers());
  }
}
