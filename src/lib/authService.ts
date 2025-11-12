import { User } from '@/types/database';
import { getToken, removeToken, setToken } from './cookie';
import { createUser, getAllUsers } from './database';

const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'ADMIN_TOKEN';

export const login = async (
  email: string,
  password: string,
): Promise<{
  success: boolean;
  data?: { token?: string; user?: User };
  error?: string;
}> => {
  try {
    const users = getAllUsers();

    const user = users.find(
      (u: User) => u.email === email && u.password === password,
    );

    if (user) {
      let token: string;

      if (user.role === 'admin') {
        token = ADMIN_TOKEN;
      } else {
        token = `TOKEN_${Date.now()}_${user.id}`;
      }

      setToken(token);

      return { success: true, data: { token, user } };
    } else {
      return { success: false, error: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Login failed' };
  }
};

export const register = async (
  userData: Omit<
    User,
    'id' | 'role' | 'is_verified' | 'created_at' | 'updated_at'
  >,
): Promise<{ success: boolean; error?: string }> => {
  try {
    createUser({
      ...userData,
      role: 'user',
      is_verified: false,
    });
    return { success: true };
  } catch (error) {
    console.error('Register error:', error);
    return { success: false, error: 'Registration failed' };
  }
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

export const logout = (): void => {
  removeToken();
};
