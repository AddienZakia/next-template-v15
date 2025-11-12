import { removeToken } from '@/lib/cookie';
import { AuthState } from '@/types/store/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,

      login: (userData) => {
        const { token, ...user } = userData;
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });

        removeToken();
        window.location.href = '/auth/login';
      },

      stopLoading: () => set({ isLoading: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

export default useAuthStore;
