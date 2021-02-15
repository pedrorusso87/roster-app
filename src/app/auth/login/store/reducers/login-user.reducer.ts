import { RegisteredUserState } from 'src/app/auth/register/store/user.state';
import { UserInformation } from 'src/app/models/user';
import * as fromLogin from '../actions/user-login-actions';


export const initialState: RegisteredUserState = {
  user: null,
  currentUser: { } as UserInformation,
  pending: {
    loginPending: false,
    currentUserPending: false,
  },
  error: null
};

export function reducer(state = initialState, action: fromLogin.LoginUserActions): RegisteredUserState {
  switch (action.type) {
    case fromLogin.LOGIN_USER: {
      return {
        ...state,
        pending: { ...state.pending, loginPending: true },
        user: action.payload
      };
    }
    case fromLogin.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        pending: { ...state.pending, loginPending: false },
      };
    }
    case fromLogin.LOGIN_USER_FAIL: {
      return {
        ...state,
        pending: { ...state.pending, loginPending: false },
        error: action.payload
      };
    }
    case fromLogin.GET_CURRENT_USER: {
      return {
        ...state,
        pending: { ...state.pending, currentUserPending: true }
      };
    }
    case fromLogin.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        pending: { ...state.pending, currentUserPending: false }
      };
    }
    case fromLogin.GET_CURRENT_USER_FAIL: {
      return {
        ...state,
        pending: { ...state.pending, currentUserPending: false },
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getLoginUserPending = (state: RegisteredUserState) => state.pending.registerPending;
export const getUser = (state: RegisteredUserState) => state.user;
export const getCurrentUser = (state: RegisteredUserState) => state.currentUser;
export const getUserPending = (state: RegisteredUserState) => state.pending.currentUserPending;
