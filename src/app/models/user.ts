export interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  $key?: string;
}

export interface UserInformation {
  displayName: string;
  email: string;
  emailVerified: boolean;
  
}

export interface UserRegistration {
  email: string;
  password: string;
}
