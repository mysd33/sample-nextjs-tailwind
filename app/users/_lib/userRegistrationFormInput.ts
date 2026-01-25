export interface UserRegistrationFormInput {
  userId: string;
  password: string;
  confirmPassword: string;
  userName: string;
  birthday: string;
  isAdmin?: boolean;
}
