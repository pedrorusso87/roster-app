import { UserInformation } from "src/app/models/user";

export interface RegisteredUserState {
  user?: any;
  currentUser?: UserInformation;
  pending: {
    registerPending?: boolean;
    loginPending?: boolean;
    currentUserPending?: boolean;
  };
  error: any;
}
