export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string; // admin | user
  is_verified: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User & { token: string }) => void;
  logout: () => void;
  stopLoading: () => void;
}
