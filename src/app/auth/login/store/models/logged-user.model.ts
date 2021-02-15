export interface LoggedUserState {
  user: any;
  pending: {
    loginPending: boolean;
    currentUserPending: boolean;
  };
  error: any;
  currentUser: any;
}
