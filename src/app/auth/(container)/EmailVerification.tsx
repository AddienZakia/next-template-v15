import Typography from '@/components/Typography';
import Image from 'next/image';

export default function EmailVerification() {
  return (
    <section className="bg-neutral-20 flex min-h-screen items-center justify-center py-10">
      <div className="max-md:w-[90%] md:w-[500px]">
        <div className="bg-neutral-10 flex flex-col items-center justify-center space-y-4 rounded-xl p-10">
          <Typography variant="hm" weight="bold">
            Periksa Email Anda
          </Typography>

          <Typography variant="s" className="text-center">
            Kami sudah mengirimkan link register ke{' '}
            <span className="font-bold">dityo@rakamin.com</span> yang berlaku
            dalam <span className="font-bold">30 menit</span>
          </Typography>

          <Image
            src="/images/verification/email-verification.png"
            width={368}
            height={368}
            alt="assets"
            className="w-[50%] max-md:w-[70%]"
          />
        </div>
      </div>
    </section>
  );
}
