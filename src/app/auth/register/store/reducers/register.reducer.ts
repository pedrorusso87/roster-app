import * as fromRegister from '../register-actions';
import { RegisteredUserState } from '../user.state';

export const initialState: RegisteredUserState = {
  user: [{
    username: 'pepe'
  }],
  registerPending: false,
  error: null
};

export function reducer(state = initialState, action: fromRegister.RegisterActions): RegisteredUserState {
  switch (action.type) {
    case fromRegister.REGISTER_USER: {
      return {
        ...state,
        registerPending: true,
        user: action.payload
      };
    }
    case fromRegister.REGISTER_USER_SUCCESS: {
      console.log(action)
      return {
        ...state,
        registerPending: false
      };
    }
    case fromRegister.REGISTER_USER_FAIL: {
      return {
        ...state,
        registerPending: false,
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getRegisterUserPending = (state: RegisteredUserState) => state.registerPending;
export const getRegisteredUser = (state: RegisteredUserState) => state.user;
