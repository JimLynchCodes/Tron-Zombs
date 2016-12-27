import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx'; this will load all features

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducerOne} from "./state-management/reducers/reducer-one";
import {reducerTwo} from "./state-management/reducers/reducer-two";
import {reducers} from "./state-management/state/state";
import {myReducer} from "./state-management/reducers/my-reducer";
import {AngularFireModule} from "angularfire2";
import {FirebaseConf} from "./.firebase-conf";

export const firebaseConfig = FirebaseConf.config;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    StoreModule.provideStore({myReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

