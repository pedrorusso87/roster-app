export interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  $key?: string;
}

export interface UserRegistration {
  email: string;
  password: string;
}
