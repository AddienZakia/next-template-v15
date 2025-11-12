export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResult {
  success: boolean;
  error?: string;
}
