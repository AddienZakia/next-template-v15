'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/hooks/useLoginHook';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import GoogleIcon from '@/components/GoogleIcon';
import { loginSchema } from '@/validations/auth/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function page() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { login, loading } = useLogin();

  const onSubmit = async (loginData: z.infer<typeof loginSchema>) => {
    await login(loginData);
  };

  return (
    <section className="bg-neutral-20 flex min-h-screen items-center justify-center py-10">
      <div className="max-md:w-[90%] md:w-[500px]">
        <Image
          src="/images/logo-rakamin.png"
          width={290}
          height={100}
          alt="assets"
          className="w-[50%] max-md:w-[70%]"
        />

        <div className="bg-neutral-10 space-y-4 rounded-xl p-10">
          <Typography variant="hm" weight="bold">
            Masuk ke Rakamin
          </Typography>

          <Typography variant="m" className="flex space-x-2">
            <span>Belum punya akun ? </span>
            <Link href={'/auth/register'} className="block">
              <span className="text-primary-main">
                Daftar menggunakan gmail
              </span>
            </Link>
          </Typography>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <Input
                id="email"
                type="email"
                label="Alamat email"
                placeholder="Masukkan alamat email"
                required
              />
              <Input
                id="password"
                type="password"
                label="Kata sandi"
                placeholder="Masukkan kata sandi"
                required
              />

              <Link href={'/auth/login'} className="float-end block w-fit">
                <Typography variant="m" className="text-primary-main">
                  Lupa kata sandi?
                </Typography>
              </Link>

              <Button
                type="submit"
                variant="alternative"
                size={'lg'}
                className="w-full"
              >
                {loading ? 'Loading...' : 'Masuk'}
              </Button>

              {/* divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-sm text-gray-500">or</span>
                <div className="h-px flex-1 bg-gray-300" />
              </div>

              <Button
                variant={'outlined'}
                leftIcon={EnvelopeIcon}
                className="w-full"
              >
                Kirim link login melalui email
              </Button>
              <Button
                variant={'outlined'}
                leftIcon={GoogleIcon}
                className="w-full"
              >
                Masuk dengan Google
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
}
