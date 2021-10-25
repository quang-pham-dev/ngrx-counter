import { NgModule } from '@angular/core';
import { UserEffects } from './user.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Action } from '@ngrx/store';
import { UserReducers } from './user.reducers';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    StoreModule.forFeature('featureUsers', UserReducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: [],
})
export class UserModule {}
