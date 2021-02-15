import * as fromRegister from '../register-actions';
import { RegisteredUserState } from '../user.state';

export const initialState: RegisteredUserState = {
  user: null,
  pending: { registerPending: false },
  error: null
};

export function reducer(state = initialState, action: fromRegister.RegisterActions): RegisteredUserState {
  switch (action.type) {
    case fromRegister.REGISTER_USER: {
      return {
        ...state,
        pending: { ...state.pending, registerPending: true },
        user: action.payload
      };
    }
    case fromRegister.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        pending: { ...state.pending, registerPending: true },
      };
    }
    case fromRegister.REGISTER_USER_FAIL: {
      return {
        ...state,
        pending: { ...state.pending, registerPending: true },
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getRegisterUserPending = (state: RegisteredUserState) => state.pending.registerPending;
export const getRegisteredUser = (state: RegisteredUserState) => state.user;
