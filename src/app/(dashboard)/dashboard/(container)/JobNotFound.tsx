import Typography from '@/components/Typography';
import Image from 'next/image';

export default function JobNotFound() {
  return (
    <div className="flex flex-col items-center space-y-4 py-6">
      <Image
        src="/images/admin/no-job.png"
        width={612}
        height={600}
        alt="assets"
        className="w-[30%] max-md:w-[50%]"
      />

      <div className="flex flex-col items-center">
        <Typography variant="hs" weight="bold">
          No job openings available
        </Typography>

        <Typography variant="l" className="max-md:text-center">
          Create a job opening now and start the candidate process.
        </Typography>
      </div>
    </div>
  );
}
