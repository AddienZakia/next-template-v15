'use client';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      color="#01959f"
      height="4px"
      options={{ showSpinner: false }}
    >
      <Toaster position="top-center" richColors />
      {children}
    </ProgressProvider>
  );
}
