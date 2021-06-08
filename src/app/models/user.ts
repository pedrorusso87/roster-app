export interface User {
  username?: string;
  email: string;
  emailVerified: boolean;
  id: string;
  displayName: string;
}

export interface UserRegistration {
  email: string;
  password: string;
}
