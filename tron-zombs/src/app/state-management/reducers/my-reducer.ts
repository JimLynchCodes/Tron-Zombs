import {ActionReducer, Action} from "@ngrx/store";
import {INCREMENT, EVENT_FROM_EFFECT} from "../actions/action-creator";
import {intitialState, AppState} from "../state/state";

export const myReducer: ActionReducer<AppState> =
  (state = intitialState, action: Action) => {

    console.log('33 Action came in! ' + action.type);

    switch (action.type) {


      case "BULLET_FIRED": {
        console.log('the bullet has been fired!');
        return state;
      }


      case INCREMENT: {
        console.log('33 Increment action being handled!');
        return state;
      }

      case EVENT_FROM_EFFECT: {
        console.log('33 we cheesin in the reducer over here!');
        return state;
      }

      default: {
        return state;
      }
    }
  };
