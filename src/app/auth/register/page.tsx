'use client';

import GoogleIcon from '@/components/GoogleIcon';
import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import { useRegister } from '@/hooks/useRegisterHook';
import { registerSchema } from '@/validations/auth/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function page() {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { register, loading } = useRegister();

  const onSubmit = async (registerData: z.infer<typeof registerSchema>) => {
    register(registerData);
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
            Bergabung dengan Rakamin
          </Typography>

          <Typography variant="m" className="flex space-x-2">
            <span>Sudah punya akun ? </span>
            <Link href={'/auth/login'} className="block">
              <span className="text-primary-main">Masuk</span>
            </Link>
          </Typography>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <Input
                id="name"
                label="Nama"
                type="text"
                placeholder="Masukkan nama lengkap"
                required
              />
              <Input
                id="email"
                label="Alamat email"
                type="email"
                placeholder="Masukkan alamat email"
                required
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Masukkan password"
                required
              />
              <Input
                id="confirmPassword"
                label="Konfirmasi Password"
                type="password"
                placeholder="Konfirmasi password kamu"
                required
              />

              <Button
                type="submit"
                variant="alternative"
                size={'lg'}
                className="w-full"
              >
                {loading ? 'Loading...' : 'Daftar dengan email'}
              </Button>

              {/* divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-sm text-gray-500">or</span>
                <div className="h-px flex-1 bg-gray-300" />
              </div>

              <Button
                variant={'outlined'}
                leftIcon={GoogleIcon}
                className="w-full"
              >
                Daftar dengan Google
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
}
