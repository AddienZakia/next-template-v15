import { User } from '../database';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  error?: string;
  token?: string;
  user?: User;
}
