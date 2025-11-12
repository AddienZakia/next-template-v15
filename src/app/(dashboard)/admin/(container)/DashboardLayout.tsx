import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import useAuthStore from '@/store/useAuthStore';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [popup, setPopup] = useState(false);
  const { logout, user } = useAuthStore();

  const REGEX_JOB_ID = /^\/admin\/job\/(.+)$/;

  return (
    <section>
      <div className="flex items-center justify-between border-b-2 px-6 py-4">
        <div className="flex items-center space-x-3">
          {pathname.match(REGEX_JOB_ID) ? (
            <>
              <Link
                href={'/admin/job'}
                className="hover:bg-neutral-20 block rounded-lg border px-4 py-2 transition-all duration-200"
              >
                <Typography variant="m" weight="bold">
                  Job List
                </Typography>
              </Link>

              <ChevronRightIcon className="h-4 w-4 text-neutral-100" />

              <Link
                href={pathname}
                className="bg-neutral-30 hover:bg-neutral-40 block rounded-lg border border-neutral-50 px-4 py-2 transition-all duration-200"
              >
                <Typography variant="l" weight="bold">
                  Manage Candidate
                </Typography>
              </Link>
            </>
          ) : (
            <Typography variant="m" weight="bold">
              Job List
            </Typography>
          )}
        </div>

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

      <div className="px-6 pt-4">{children}</div>
    </section>
  );
}
