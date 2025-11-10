'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormProvider, useForm } from 'react-hook-form';

export default function InputTextareaSandbox() {
  const methods = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = () => {
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Input & Textarea Component Sandbox
          </h1>
          <p className="text-gray-600">
            Demonstrasi berbagai variasi komponen Input dan Textarea dengan
            fitur-fiturnya menggunakan React Hook Form
          </p>
        </div>

        {/* INPUT COMPONENTS */}
        <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            📝 Input Components
          </h2>
        </div>

        {/* Basic Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Basic Input
          </h3>
          <FormProvider {...useForm()}>
            <Input
              id="username"
              label="Username"
              placeholder="Masukkan username Anda"
            />
          </FormProvider>
        </div>

        {/* Required Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Required Input (dengan validasi)
          </h3>
          <FormProvider {...useForm()}>
            <form className="space-y-4">
              <Input
                id="email"
                label="Email"
                placeholder="example@email.com"
                type="email"
                required
                helperText="Email wajib diisi"
                validation={{
                  required: 'Email tidak boleh kosong',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid',
                  },
                }}
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Validate Email
              </button>
            </form>
          </FormProvider>
        </div>

        {/* Input with Character Count */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Input with Character Count
          </h3>
          <FormProvider {...useForm()}>
            <Input
              id="bio"
              label="Bio"
              placeholder="Ceritakan tentang diri Anda"
              showCharCount
              maxChars={50}
              helperText="Maksimal 50 karakter"
              validation={{
                maxLength: {
                  value: 50,
                  message: 'Bio tidak boleh lebih dari 50 karakter',
                },
              }}
            />
          </FormProvider>
        </div>

        {/* Password Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Password Input (dengan validasi min length)
          </h3>
          <FormProvider {...useForm()}>
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Masukkan password"
              required
              helperText="Minimal 8 karakter"
              validation={{
                required: 'Password tidak boleh kosong',
                minLength: {
                  value: 8,
                  message: 'Password minimal 8 karakter',
                },
              }}
            />
          </FormProvider>
        </div>

        {/* Disabled Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Disabled Input
          </h3>
          <FormProvider
            {...useForm({ defaultValues: { accountId: '12345678' } })}
          >
            <Input
              id="accountId"
              label="Account ID"
              disabled
              helperText="Field ini tidak bisa diubah"
            />
          </FormProvider>
        </div>

        {/* TEXTAREA COMPONENTS */}
        <div className="rounded-lg border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            📄 Textarea Components
          </h2>
        </div>

        {/* Basic Textarea */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Basic Textarea
          </h3>
          <FormProvider {...useForm()}>
            <Textarea
              id="description"
              label="Description"
              placeholder="Tulis deskripsi lengkap di sini..."
              rows={4}
            />
          </FormProvider>
        </div>

        {/* Required Textarea */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Required Textarea
          </h3>
          <FormProvider {...useForm()}>
            <Textarea
              id="feedback"
              label="Feedback"
              placeholder="Berikan feedback Anda..."
              required
              helperText="Feedback wajib diisi"
              rows={4}
              validation={{
                required: 'Feedback tidak boleh kosong',
              }}
            />
          </FormProvider>
        </div>

        {/* Textarea with Character Count */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Textarea with Character Count
          </h3>
          <FormProvider {...useForm()}>
            <Textarea
              id="comment"
              label="Comment"
              placeholder="Tulis komentar Anda (maksimal 200 karakter)"
              showCharCount
              maxChars={200}
              helperText="Tulis komentar singkat"
              rows={4}
              validation={{
                maxLength: {
                  value: 200,
                  message: 'Komentar tidak boleh lebih dari 200 karakter',
                },
              }}
            />
          </FormProvider>
        </div>

        {/* Disabled Textarea */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Disabled Textarea
          </h3>
          <FormProvider
            {...useForm({
              defaultValues: {
                terms:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
            })}
          >
            <Textarea
              id="terms"
              label="Terms & Conditions"
              disabled
              helperText="Terms tidak dapat diubah"
              rows={3}
            />
          </FormProvider>
        </div>

        {/* COMBINED FORM */}
        <div className="rounded-lg border border-green-200 bg-linear-to-r from-green-50 to-teal-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ✨ Combined Form Example (Fully Functional)
          </h2>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Contact Form (Input + Textarea)
          </h3>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <Input
                id="fullName"
                label="Full Name"
                placeholder="John Doe"
                required
                validation={{
                  required: 'Nama lengkap wajib diisi',
                  minLength: {
                    value: 3,
                    message: 'Nama minimal 3 karakter',
                  },
                }}
              />
              <Input
                id="email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                required
                validation={{
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid',
                  },
                }}
              />
              <Input
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="+62 812 3456 7890"
                helperText="Format: +62 xxx xxxx xxxx"
                validation={{
                  pattern: {
                    value: /^(\+62|62|0)[0-9]{9,12}$/,
                    message: 'Format nomor telepon tidak valid',
                  },
                }}
              />
              <Input
                id="subject"
                label="Subject"
                placeholder="Subject pesan Anda"
                showCharCount
                maxChars={100}
                required
                validation={{
                  required: 'Subject wajib diisi',
                  maxLength: {
                    value: 100,
                    message: 'Subject maksimal 100 karakter',
                  },
                }}
              />
              <Textarea
                id="message"
                label="Message"
                placeholder="Tulis pesan lengkap Anda di sini..."
                showCharCount
                maxChars={500}
                helperText="Jelaskan kebutuhan Anda dengan detail"
                required
                rows={6}
                validation={{
                  required: 'Pesan wajib diisi',
                  minLength: {
                    value: 10,
                    message: 'Pesan minimal 10 karakter',
                  },
                  maxLength: {
                    value: 500,
                    message: 'Pesan maksimal 500 karakter',
                  },
                }}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Submit Form
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
