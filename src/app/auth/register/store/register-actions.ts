import { Action } from '@ngrx/store';
import { UserRegistration } from 'src/app/models/user';

// register user with email and password
export const REGISTER_USER = '[AUTH] Register user';
export const REGISTER_USER_SUCCESS = '[AUTH] Register user success';
export const REGISTER_USER_FAIL = '[AUTH] Register user failed';
export class RegisterUser implements Action {
  readonly type = REGISTER_USER;
  constructor( public payload: UserRegistration) {}
}
export class RegisterUserSuccess implements Action {
  readonly type = REGISTER_USER_SUCCESS;
}
export class RegisterUserFailed implements Action {
  readonly type = REGISTER_USER_FAIL;
  constructor( public payload: any) {}
}

// action types
export type RegisterActions = RegisterUser | RegisterUserSuccess | RegisterUserFailed;
