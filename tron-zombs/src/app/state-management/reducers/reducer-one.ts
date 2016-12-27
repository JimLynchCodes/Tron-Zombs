import {ActionReducer, Action} from "@ngrx/store";
import {INCREMENT, EVENT_FROM_EFFECT} from "../actions/action-creator";
import {intitialState, AppState} from "../state/state";

export const reducerOne: ActionReducer<AppState> =
  (state = intitialState, action: Action) => {

    console.log('Action came in! ' + action.type);

    switch (action.type) {

      case INCREMENT: {
        console.log('Increment action being handled!');
        return state;
      }

      case EVENT_FROM_EFFECT: {
        console.log('we cheesin in the reducer over here!');
        return state;
      }

      default: {
        return state;
      }
    }
  };

