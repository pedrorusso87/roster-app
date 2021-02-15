import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { RegisterActions } from '../register-actions';
import { RegisteredUserState } from '../user.state';
import * as fromRegisterUser from './register.reducer';

export interface RegisterState {
  registeredUser: RegisteredUserState;
}

export const reducers: ActionReducerMap<RegisterState, RegisterActions> = {
  registeredUser: fromRegisterUser.reducer,
 };

const registeredUserState = createFeatureSelector<RegisterState>('registeredUser');

export const getRegisteredUserState = createSelector(
  registeredUserState,
  (state: RegisterState) => state.registeredUser
);

export const getRegisteredUser = createSelector(
  getRegisteredUserState,
  fromRegisterUser.getRegisteredUser
);
export const getRegisteredUserPending = createSelector(
  getRegisteredUserState,
  (state: RegisteredUserState) => state.pending.registerPending
);
