import { User } from '../database';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User & { token: string }) => void;
  logout: () => void;
  stopLoading: () => void;
}
