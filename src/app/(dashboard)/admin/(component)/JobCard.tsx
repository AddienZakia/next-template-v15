import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Job } from '@/types/database';
import Link from 'next/link';

type statusType = 'active' | 'inactive' | 'draft' | string;

export default function JobCard({ dataJob }: { dataJob: Job }) {
  const status: statusType = dataJob.status;

  const date = new Date(dataJob.created_at as string);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  function getStatusButtonColor() {
    switch (status) {
      case 'active':
        return {
          button: 'bg-success-surface border border-success-border',
          text: 'text-success-main',
        };
      case 'inactive':
        return {
          button: 'bg-danger-surface border border-danger-border',
          text: 'text-danger-main',
        };

      case 'draft':
        return {
          button: 'bg-warning-surface border border-warning-border',
          text: 'text-warning-main',
        };
    }
  }

  return (
    <section className="space-y-3 rounded-xl p-6 shadow-md">
      <div className="flex flex-col gap-4 md:flex-row">
        <div
          className={cn('rounded-lg px-4 py-2', getStatusButtonColor()?.button)}
        >
          <Typography
            variant="m"
            weight="bold"
            className={cn(getStatusButtonColor()?.text, 'capitalize')}
          >
            {dataJob.status}
          </Typography>
        </div>
        <div className="rounded-lg border px-4 py-2">
          <Typography variant="m" weight="bold">
            Started on {formattedDate}
          </Typography>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="space-y-3">
          <Typography variant="xl" weight="bold">
            {dataJob.name}
          </Typography>

          <Typography variant="l" className="text-neutral-80">
            Rp{dataJob.min_salary.toLocaleString().replaceAll(/,/gi, '.')} - Rp
            {dataJob.max_salary.toLocaleString().replaceAll(/,/gi, '.')}
          </Typography>
        </div>

        <Link href={'/admin/job/' + dataJob.id}>
          <Button variant="primary">Manage Job</Button>
        </Link>
      </div>
    </section>
  );
}
