'use client';

import { SelectInput } from '@/components/ui/SelectInput';
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
      jobType: '',
      location: '',
      experience: '',
    },
  });

  const onSubmit = () => {
    alert('Form submitted! Check console for data.');
  };

  // Options untuk Select components
  const jobTypeOptions = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'freelance', label: 'Freelance' },
  ];

  const experienceOptions = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior (5+ years)' },
    { value: 'lead', label: 'Lead/Principal (8+ years)' },
  ];

  const locationOptions = [
    { value: 'jakarta', label: 'Jakarta' },
    { value: 'surabaya', label: 'Surabaya' },
    { value: 'bandung', label: 'Bandung' },
    { value: 'yogyakarta', label: 'Yogyakarta' },
    { value: 'bali', label: 'Bali' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Input, Textarea & Select Component Sandbox
          </h1>
          <p className="text-gray-600">
            Demonstrasi berbagai variasi komponen Input, Textarea, dan Select
            dengan fitur-fiturnya menggunakan React Hook Form
          </p>
        </div>

        {/* INPUT COMPONENTS */}
        <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            📝 Input Components
          </h2>
          <p className="text-sm text-gray-600">
            Berbagai variasi input field dengan validasi
          </p>
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
            <div className="space-y-4">
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
                type="button"
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Validate Email
              </button>
            </div>
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
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            📄 Textarea Components
          </h2>
          <p className="text-sm text-gray-600">
            Textarea dengan berbagai fitur dan validasi
          </p>
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

        {/* SELECT COMPONENTS */}
        <div className="rounded-lg border border-teal-200 bg-linear-to-r from-teal-50 to-cyan-50 p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            🎯 Select Components
          </h2>
          <p className="text-sm text-gray-600">
            Dropdown select dengan berbagai konfigurasi
          </p>
        </div>

        {/* Basic Select */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Basic Select
          </h3>
          <FormProvider {...useForm()}>
            <SelectInput
              id="jobType"
              label="Job Type"
              placeholder="Select job type"
              options={jobTypeOptions}
            />
          </FormProvider>
        </div>

        {/* Required Select */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Required Select (dengan validasi)
          </h3>
          <FormProvider {...useForm()}>
            <SelectInput
              id="experience"
              label="Experience Level"
              placeholder="Select experience level"
              options={experienceOptions}
              required
              helperText="Experience level wajib dipilih"
              validation={{
                required: 'Experience level tidak boleh kosong',
              }}
            />
          </FormProvider>
        </div>

        {/* Select with Group Label */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Select with Group Label
          </h3>
          <FormProvider {...useForm()}>
            <SelectInput
              id="location"
              label="Preferred Location"
              placeholder="Select location"
              groupLabel="Available Cities in Indonesia"
              options={locationOptions}
              helperText="Pilih kota yang Anda inginkan"
            />
          </FormProvider>
        </div>

        {/* Disabled Select */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Disabled Select
          </h3>
          <FormProvider
            {...useForm({ defaultValues: { department: 'engineering' } })}
          >
            <SelectInput
              id="department"
              label="Department"
              placeholder="Select department"
              options={[
                { value: 'engineering', label: 'Engineering' },
                { value: 'design', label: 'Design' },
                { value: 'marketing', label: 'Marketing' },
              ]}
              disabled
              helperText="Department sudah ditentukan"
            />
          </FormProvider>
        </div>

        {/* COMBINED FORM */}
        <div className="rounded-lg border border-green-200 bg-linear-to-r from-green-50 to-teal-50 p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            ✨ Combined Form Example (Fully Functional)
          </h2>
          <p className="text-sm text-gray-600">
            Form lengkap dengan Input, Textarea, dan Select
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Job Application Form (Input + Textarea + Select)
          </h3>
          <FormProvider {...methods}>
            <div className="space-y-4">
              {/* Personal Info */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">
                  Personal Information
                </h4>
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
              </div>

              {/* Job Preferences */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Job Preferences</h4>
                <SelectInput
                  id="jobType"
                  label="Job Type"
                  placeholder="Select job type"
                  options={jobTypeOptions}
                  required
                  helperText="Pilih tipe pekerjaan yang diinginkan"
                  validation={{
                    required: 'Job type wajib dipilih',
                  }}
                />
                <SelectInput
                  id="experience"
                  label="Experience Level"
                  placeholder="Select experience level"
                  options={experienceOptions}
                  required
                  validation={{
                    required: 'Experience level wajib dipilih',
                  }}
                />
                <SelectInput
                  id="location"
                  label="Preferred Location"
                  placeholder="Select location"
                  groupLabel="Available Cities"
                  options={locationOptions}
                  helperText="Lokasi kerja yang diinginkan"
                />
              </div>

              {/* Application Details */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">
                  Application Details
                </h4>
                <Input
                  id="subject"
                  label="Subject"
                  placeholder="Subject aplikasi Anda"
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
                  label="Cover Letter"
                  placeholder="Tulis cover letter Anda di sini..."
                  showCharCount
                  maxChars={500}
                  helperText="Jelaskan mengapa Anda cocok untuk posisi ini"
                  required
                  rows={6}
                  validation={{
                    required: 'Cover letter wajib diisi',
                    minLength: {
                      value: 50,
                      message: 'Cover letter minimal 50 karakter',
                    },
                    maxLength: {
                      value: 500,
                      message: 'Cover letter maksimal 500 karakter',
                    },
                  }}
                />
              </div>

              <button
                type="button"
                onClick={methods.handleSubmit(onSubmit)}
                className="w-full rounded-md bg-linear-to-r from-blue-600 to-teal-600 px-4 py-2 font-medium text-white transition-all hover:from-blue-700 hover:to-teal-700"
              >
                Submit Application
              </button>
            </div>
          </FormProvider>
        </div>

        {/* Features Summary */}
        <div className="rounded-lg border border-gray-200 bg-linear-to-r from-orange-50 to-yellow-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">
            📋 Component Features Summary
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Input</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Basic & Required</li>
                <li>✅ Character Count</li>
                <li>✅ Custom Validation</li>
                <li>✅ Helper Text</li>
                <li>✅ Disabled State</li>
                <li>✅ Error Display</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Textarea</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Multi-line Input</li>
                <li>✅ Character Count</li>
                <li>✅ Custom Rows</li>
                <li>✅ Validation</li>
                <li>✅ Helper Text</li>
                <li>✅ Disabled State</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800">Select</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Dropdown Options</li>
                <li>✅ Group Label</li>
                <li>✅ Placeholder</li>
                <li>✅ Validation</li>
                <li>✅ Helper Text</li>
                <li>✅ Disabled State</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
