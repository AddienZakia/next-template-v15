import { register } from '@/lib/authService';
import { RegisterCredentials, RegisterResult } from '@/types/auth/register';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const executeRegister = async (
    credentials: RegisterCredentials,
  ): Promise<RegisterResult> => {
    setLoading(true);
    setError(null);

    try {
      const result = await register(credentials);

      if (result.success) {
        router.push('/auth/login');
        toast.success('Successfull register account');
        return { success: true };
      } else {
        toast.error(result.error || 'Registration failed');
        return { success: false, error: result.error || 'Registration failed' };
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
    register: executeRegister,
    loading,
    error,
  };
};
