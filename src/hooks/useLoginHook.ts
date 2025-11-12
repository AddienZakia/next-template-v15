import { login } from '@/lib/authService';
import useAuthStore from '@/store/useAuthStore';
import { LoginCredentials, LoginResult } from '@/types/auth/login';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { login: LoginStore } = useAuthStore();

  const executeLogin = async (
    credentials: LoginCredentials,
  ): Promise<LoginResult> => {
    setLoading(true);
    setError(null);

    try {
      const result = await login(credentials.email, credentials.password);

      if (result.success) {
        router.push('/admin/job');
        router.refresh();

        toast.success('Successfull login. Redirect to dashboard');
        if (result.data?.user && result.data.token) {
          LoginStore({ ...result.data?.user, token: result.data?.token });
        }

        return {
          success: true,
          token: result.data?.token,
        };
      } else {
        toast.error(result.error || 'Login failed');
        return { success: false, error: result.error || 'Login failed' };
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    login: executeLogin,
    loading,
    error,
  };
};
