export interface UserSignUpPayload {
  email: string;
  fullName: string;
  password: string;
}

export interface FormValidationPayload extends UserSignUpPayload {
  confirmedPassword: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
