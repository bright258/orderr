export interface UserSignUpPayload {
    email: string;
    fullName: string;
    password: string;
  }
  

export interface FormValdationPayload extends UserSignUpPayload {
  confirmedPassword: string;
}

