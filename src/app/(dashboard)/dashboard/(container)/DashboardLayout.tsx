import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import useAuthStore from '@/store/useAuthStore';
import { User } from 'lucide-react';
import React, { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popup, setPopup] = useState(false);
  const { logout, user } = useAuthStore();

  return (
    <section className="flex h-screen flex-col">
      <div className="flex items-center justify-end border-b-2 px-6 py-4">
        <Popover open={popup} onOpenChange={setPopup}>
          <PopoverTrigger>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-50 text-white">
              <User className="h-5 w-5" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="bg-neutral-10 mt-2 w-[200px] space-y-2"
          >
            <div>
              <Typography variant="hs" weight="bold">
                {user?.name || 'Admin'}
              </Typography>
              <Typography variant="l">{user?.email}</Typography>
            </div>

            <div className="bg-border h-px" />

            <Button variant="primary" className="w-full" onClick={logout}>
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 px-6 py-4 lg:px-28 lg:py-10">{children}</div>
    </section>
  );
}
