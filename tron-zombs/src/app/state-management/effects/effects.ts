import { Action } from '@ngrx/store';
import {Effect, Actions} from  '@ngrx/effects';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {fromPromise} from "rxjs/observable/fromPromise";
import {AngularFire} from "angularfire2";


@Injectable()
export class MainEffects {
  constructor (private actions$: Actions, private af:AngularFire) {

  }

  @Effect() updates$ = this.actions$
    .ofType('INCREMENT')
    .switchMap( () =>
      Observable.timer(2000)
        .switchMap(() => Observable.of({ type: "CHEESIN" }))
    );
  // .map(update => console.log('got the encrement action in the effects!'))


  // @Effect() anonymousAuth$ = this.actions$
  //   .ofType('BEGIN_ANONYMOUS_AUTH')
  //   .mergeMap( () => {
  //     console.log('beginning the anonymous auth')
  //     return Observable.fromPromise(
  //       <Promise<any>>firebase.auth().signInAnonymously()
  //         .then( (result) => {
  //           console.log('well ok then: ' + result)
  //           return new actionCreator.AuthSuccess(
  //             {uid: result.uid, isAnonymous: result.isAnonymous}
  //           )
  //         }, (error)=> {
  //           console.log('sign in errored out! ');
  //         }))
  //   })

  @Effect() fireBulletFirebase$ = this.actions$
    .ofType('FIRE_BULLET')
    .switchMap( (payload) => {

      console.log('in the effect calling to firebase!');

      // return
      //   .then( () => {
      //
      // })

    })



  //   .map(result =>
  //     new actionCreator.AuthSuccess(
  //       {uid: result.uid, isAnonymous: result.isAnonymous})

  // .switchMap( (result) => {
  //   console.log('anonymous sign in came back + ' + JSON.stringify(result));
  //   })
  // )})

  // TODO Effect for loading user data from firebase database
  @Effect() userDetails$ = this.actions$
    .ofType('PULL_USER_DETAILS')
    .switchMap( (payload) => {
      console.log("beginning the pull users details @effect for: " + (<any>payload).uid);
      return this.af.database.object('/cypherapp/users/' + (<any>payload).uid)
        .switchMap(result => {
          // return Observable.of(new actionCreator.PullCurrentUserDataSuccess(result.val()))
        })
    })


  // TODO Effect for loading room details (including array of video url's) from firebase




}
