import Typography from '@/components/Typography';
import Image from 'next/image';

export default function ApplicantSent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 py-6">
      <Image
        src="/images/admin/applicant-sent.png"
        width={428}
        height={428}
        alt="assets"
        className="w-[20%] max-md:w-[50%]"
      />

      <div className="flex flex-col items-center justify-center">
        <Typography variant="hm" weight="bold" className="text-center">
          🎉 Your application was sent!
        </Typography>

        <Typography variant="l" className="text-center lg:w-[70%]">
          Congratulations! You've taken the first step towards a rewarding
          career at Rakamin. We look forward to learning more about you during
          the application process.
        </Typography>
      </div>
    </div>
  );
}
