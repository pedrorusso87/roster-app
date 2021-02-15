import { Action } from '@ngrx/store';
import { UserRegistration } from 'src/app/models/user';

export const LOGIN_USER = '[AUTH] login user';
export const LOGIN_USER_SUCCESS = '[AUTH] login user success';
export const LOGIN_USER_FAIL = '[AUTH] logint user failed';

export const GET_CURRENT_USER = '[AUTH] get current user';
export const GET_CURRENT_USER_SUCCESS = '[AUTH] get current user success';
export const GET_CURRENT_USER_FAIL = '[AUTH] get current user failed';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor( public payload: UserRegistration) {}
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: any) {}
}
export class LoginUserFailed implements Action {
  readonly type = LOGIN_USER_FAIL;
  constructor( public payload: any) {}
}

export class GetCurrentUser implements Action {
  readonly type = GET_CURRENT_USER;
}

export class GetCurrentUserSuccess implements Action {
  readonly type = GET_CURRENT_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCurrentUserFailed implements Action {
  readonly type = GET_CURRENT_USER_FAIL;
  constructor( public payload: any) {}
}

// action types
export type LoginUserActions = LoginUser | LoginUserSuccess | LoginUserFailed
| GetCurrentUserSuccess | GetCurrentUserFailed;
