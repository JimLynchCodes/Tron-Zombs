import {reducerOne} from "../reducers/reducer-one";
import {combineReducers} from "@ngrx/store";
import {reducerTwo} from "../reducers/reducer-two";
export interface AppState {
  user:User,
  bullets: Bullet[]
};


export interface User {
  name: string
  xPos: number
  yPos: number
};

export interface Bullet {
  xPos: number,
  yPos: number,
  shotBy: string
};


export const intitialState: AppState = {
  user: {name: 'Jim',
    xPos: 0,
    yPos: 0},
  bullets: []
};

export var reducers = combineReducers({reducerOne, reducerTwo});
export function reducer(action,state) {
  return reducers(action,state);
}

export interface GlobalState {
  myReducer: AppState
}
