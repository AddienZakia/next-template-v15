import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.string().email('Alamat email tidak valid'),
    password: z.string().min(6, 'Kata sandi minimal 6 karakter'),
    confirmPassword: z
      .string()
      .min(6, 'Konfirmasi kata sandi minimal 6 karakter'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Kata sandi dan konfirmasi kata sandi tidak cocok',
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
