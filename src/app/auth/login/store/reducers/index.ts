import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { RegisteredUserState } from 'src/app/auth/register/store/user.state';
import { LoginUserActions } from '../actions/user-login-actions';

import * as fromLogin from './login-user.reducer';

export interface LoginState {
  loggedUser: RegisteredUserState;
  currentUser: RegisteredUserState;
}

export const reducers: ActionReducerMap<LoginState, LoginUserActions> = {
  loggedUser: fromLogin.reducer,
  currentUser: fromLogin.reducer
 };

const loggedUserState = createFeatureSelector<LoginState>('loggedUser');
const currentUser = createFeatureSelector<LoginState>('currentUser');

export const getLoggedUserState = createSelector(loggedUserState, (state: LoginState) => state.loggedUser);
export const getCurrentUserState = createSelector(currentUser, (state: LoginState) => state.currentUser);

export const getLoggedUser = createSelector(getLoggedUserState, fromLogin.getUser);
export const getLoggedUserPending = createSelector(getLoggedUserState, (state: RegisteredUserState) => state.pending.loginPending);

export const getCurrentUser = createSelector(getCurrentUserState, fromLogin.getCurrentUser);
export const getCurrentUserPending = createSelector(getCurrentUserState, (state: RegisteredUserState) => state.pending.currentUserPending);
