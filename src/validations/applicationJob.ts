import { z } from 'zod';

export const jobApplicationSchema = z.object({
  photo: z.string().optional().nullable(),
  name: z
    .string()
    .min(3, 'Nama lengkap minimal 3 karakter')
    .max(100, 'Nama lengkap maksimal 100 karakter')
    .regex(/^[a-zA-Z\s]+$/, 'Nama hanya boleh berisi huruf dan spasi'),
  date: z
    .string()
    .min(1, 'Tanggal lahir wajib diisi')
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 17 && age <= 65;
      },
      {
        message: 'Usia harus antara 17-65 tahun',
      },
    ),

  gender: z.enum(['female', 'male'], {
    message: 'Pilih salah satu gender',
  }),
  domicile: z.string().min(1, 'Domisili wajib dipilih'),
  phoneNumber: z
    .string()
    .min(10, 'Nomor telepon minimal 10 digit')
    .max(15, 'Nomor telepon maksimal 15 digit')
    .regex(/^[0-9]+$/, 'Nomor telepon hanya boleh berisi angka'),
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid')
    .toLowerCase(),
  linkedin: z
    .string()
    .min(1, 'Link LinkedIn wajib diisi')
    .url('Format URL tidak valid')
    .refine(
      (url) => {
        return url.includes('linkedin.com');
      },
      {
        message: 'Link harus dari LinkedIn',
      },
    ),
});

export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
