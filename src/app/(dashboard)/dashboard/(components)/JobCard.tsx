import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Job } from '@/types/database';
import { BanknotesIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function JobCard({
  jobData,
  selected,
}: {
  jobData: Job;
  selected: boolean;
}) {
  return (
    <div
      className={cn(
        'hover:bg-neutral-20 translate-all cursor-pointer space-y-2 rounded-lg border px-4 py-3 duration-200',
        selected &&
          'bg-primary-surface border-primary-main hover:bg-primary-surface',
      )}
    >
      <div className="flex items-center space-x-4 py-3">
        <Image
          src={'/images/logo-rect.png'}
          width={75}
          height={75}
          alt="assets"
          className=""
        />

        <div>
          <Typography variant="l" weight="bold">
            {jobData.name}
          </Typography>
          <Typography variant="l">Rakamin</Typography>
        </div>
      </div>

      <div className="space-y-2 border-t-2 border-dashed py-3">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5" />
          <Typography>{jobData.location}</Typography>
        </div>

        <div className="flex items-center space-x-2">
          <BanknotesIcon className="h-5 w-5" />
          <Typography>
            Rp{jobData.min_salary.toLocaleString().replaceAll(/,/gi, '.')} - Rp
            {jobData.max_salary.toLocaleString().replaceAll(/,/gi, '.')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
