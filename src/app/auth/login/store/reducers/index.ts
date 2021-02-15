import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedUserState } from '../models/logged-user.model';
import { LoginUserActions } from '../login-actions';
import * as fromLoginUser from './login.reducer';

export interface LoggedState {
  loggedUser: LoggedUserState;
}

export const reducers: ActionReducerMap<LoggedState, LoginUserActions> = {
  loggedUser: fromLoginUser.reducer,
 };

const loggedUserState = createFeatureSelector<LoggedState>('loggedUser');

export const getLoggedUserState = createSelector(loggedUserState, (state: LoggedState) => state.loggedUser);

export const getLoggedUser = createSelector(getLoggedUserState, fromLoginUser.getLoggedUser);
export const getLoggedUserPending = createSelector(getLoggedUserState, (state: LoggedUserState) => state.pending.loginPending);
export const getCurrentUser = createSelector(getLoggedUserState, fromLoginUser.getCurrentUser);
export const getCurrentUserPending = createSelector(getLoggedUserState, fromLoginUser.getCurrentUserPending);
