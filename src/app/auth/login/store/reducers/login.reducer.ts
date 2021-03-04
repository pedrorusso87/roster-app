import * as fromLogin from '../login-actions';
import { LoggedUserState } from '../models/logged-user.model';

export const initialState: LoggedUserState = {
  user: null,
  pending: {
    loginPending: false,
    currentUserPending: false
  },
  error: null,
  currentUser: null
};

export function reducer(state = initialState, action: fromLogin.LoginUserActions): LoggedUserState {
  switch (action.type) {
    case fromLogin.LOGIN_USER: {
      return {
        ...state,
        pending: {...state.pending, loginPending: true},
        user: action.payload
      };
    }
    case fromLogin.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        pending: {...state.pending, loginPending: false},
        user: action.payload,
        error: null
      };
    }
    case fromLogin.LOGIN_USER_FAIL: {
      return {
        ...state,
        pending: {...state.pending, loginPending: false},
        error: action.payload
      };
    }
    case fromLogin.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        pending: {...state.pending, currentUserPending: false},
        currentUser: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getLoginUserPending = (state: LoggedUserState) => state.pending.loginPending;
export const getLoggedUser = (state: LoggedUserState) => state.user;
export const getCurrentUserPending = (state: LoggedUserState) => state.pending.currentUserPending;
export const getCurrentUser = (state: LoggedUserState) => state.currentUser;

