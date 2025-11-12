import Typography from '@/components/Typography';
import Image from 'next/image';

export default function CandidateNotFound() {
  return (
    <div className="flex flex-col items-center space-y-4 py-6">
      <Image
        src="/images/admin/no-candidate.png"
        width={276}
        height={260}
        alt="assets"
        className="w-[20%] max-md:w-[50%]"
        quality={100}
      />

      <div className="flex flex-col items-center">
        <Typography variant="hs" weight="bold">
          No candidates found
        </Typography>

        <Typography variant="l" className="max-md:text-center">
          Share your job vacancies so that more candidates will apply.
        </Typography>
      </div>
    </div>
  );
}
