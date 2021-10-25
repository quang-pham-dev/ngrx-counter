import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { CounterEffect } from './store/counter1/counter.effect';
import { countReducer } from './store/counter1/counter.reducer';
import { count2Reducer } from './store/counter2/counter2.reducer';
import { UserComponent } from './components/user/user.component';
import { UserModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([CounterEffect]),
    StoreModule.forRoot({ count: countReducer, count2: count2Reducer }),
    // EffectsModule.forRoot([]),
    // StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
