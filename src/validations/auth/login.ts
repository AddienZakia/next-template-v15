import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Alamat email tidak valid'),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
