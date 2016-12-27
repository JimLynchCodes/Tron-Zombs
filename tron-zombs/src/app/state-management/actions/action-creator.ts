

import {Action} from "@ngrx/store";

export const ActionTypes = {
  SEARCH:           'SEARCH',
  GET_VIDEOS:       'GET_VIDEOS',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  BEGIN_ANONYMOUS_AUTH:'BEGIN_ANONYMOUS_AUTH',
  PULL_CURRENT_USER_DATA:'PULL_CURRENT_USER_DATA',
  PULL_CURRENT_USER_DATA_SUCCESS:'PULL_CURRENT_USER_DATA_SUCCESS',
  SET_ANONOYMOUS_USER_DATA:'SET_ANONOYMOUS_USER_DATA'

};


export const INCREMENT:string = "INCREMENT";
export const EVENT_FROM_EFFECT:string = "EVENT_FROM_EFFECT";


export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor() { }
}

export class GetVideosAction implements Action {
  type = ActionTypes.GET_VIDEOS;

  constructor(public payload: string) { }
}

export class BeginAnonymousAuth implements Action {
  type = ActionTypes.BEGIN_ANONYMOUS_AUTH;

  constructor() { }
}

export class AuthSuccess implements Action {
  type = ActionTypes.AUTH_SUCCESS;

  constructor(public payload: {uid:string, isAnonymous: boolean}) { }
}

export class SetAnonymousUserData implements Action {
  type = ActionTypes.SET_ANONOYMOUS_USER_DATA;

  constructor(public payload:any) {
  }
}

export class PullCurrentUserDataSuccess implements Action {
  type = ActionTypes.PULL_CURRENT_USER_DATA_SUCCESS;

  constructor(public payload:any) {
  }
}

export class PullCurrentUserData implements Action {
  type = ActionTypes.PULL_CURRENT_USER_DATA;

  constructor(public payload:any) {
  }
}

export type Actions =
  SearchAction |
    GetVideosAction |
    AuthSuccess |
    BeginAnonymousAuth |
    PullCurrentUserData |
    PullCurrentUserDataSuccess |
    SetAnonymousUserData;


