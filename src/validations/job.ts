import { z } from 'zod';

export const jobSchema = z
  .object({
    name: z.string().min(2, 'Nama pekerjaan minimal 2 karakter'),
    type: z.string().min(1, 'Jenis pekerjaan wajib diisi'),
    status: z.enum(['active', 'inactive', 'draft'], {
      message: 'Status pekerjaan tidak valid',
    }),
    location: z.string().min(3, 'Location minimal 10 karakter'),
    description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
    total_candidate_need: z.coerce
      .number({ message: 'Harus berupa angka' })
      .min(1, 'Jumlah kandidat minimal 1'),
    min_salary: z.coerce
      .number({ message: 'Harus berupa angka' })
      .min(0, 'Gaji minimal tidak boleh negatif'),
    max_salary: z.coerce
      .number({ message: 'Harus berupa angka' })
      .min(0, 'Gaji maksimal tidak boleh negatif'),
    information_id: z.coerce
      .number({ message: 'Harus berupa angka' })
      .min(1, 'ID informasi wajib diisi'),
  })
  .refine((data) => data.max_salary >= data.min_salary, {
    message: 'Gaji maksimal harus lebih besar atau sama dengan gaji minimal',
    path: ['max_salary'],
  })
  .refine((data) => data.total_candidate_need > 0, {
    message: 'Jumlah kandidat harus lebih besar dari 0',
    path: ['total_candidate_need'],
  });

export type JobFormData = z.infer<typeof jobSchema>;
