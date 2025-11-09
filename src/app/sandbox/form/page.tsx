import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function InputTextareaSandbox() {
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
            fitur-fiturnya
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
          <Input label="Username" placeholder="Masukkan username Anda" />
        </div>

        {/* Required Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Required Input
          </h3>
          <Input
            label="Email"
            placeholder="example@email.com"
            type="email"
            required
            helperText="Email wajib diisi"
          />
        </div>

        {/* Input with Character Count */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Input with Character Count
          </h3>
          <Input
            label="Bio"
            placeholder="Ceritakan tentang diri Anda"
            showCharCount
            maxChars={50}
            helperText="Maksimal 50 karakter"
          />
        </div>

        {/* Password Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Password Input
          </h3>
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
            required
            helperText="Minimal 8 karakter"
          />
        </div>

        {/* Disabled Input */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Disabled Input
          </h3>
          <Input
            label="Account ID"
            value="12345678"
            disabled
            helperText="Field ini tidak bisa diubah"
          />
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
          <Textarea
            label="Description"
            placeholder="Tulis deskripsi lengkap di sini..."
            rows={4}
          />
        </div>

        {/* Required Textarea */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Required Textarea
          </h3>
          <Textarea
            label="Feedback"
            placeholder="Berikan feedback Anda..."
            required
            helperText="Feedback wajib diisi"
            rows={4}
          />
        </div>

        {/* Textarea with Character Count */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Textarea with Character Count
          </h3>
          <Textarea
            label="Comment"
            placeholder="Tulis komentar Anda (maksimal 200 karakter)"
            showCharCount
            maxChars={200}
            helperText="Tulis komentar singkat"
            rows={4}
          />
        </div>

        {/* Disabled Textarea */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Disabled Textarea
          </h3>
          <Textarea
            label="Terms & Conditions"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            disabled
            helperText="Terms tidak dapat diubah"
            rows={3}
          />
        </div>

        {/* Textarea Error State */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Textarea Error State
          </h3>
          <Textarea
            label="Short Message"
            placeholder="Ketik lebih dari 100 karakter untuk melihat error state"
            showCharCount
            maxChars={100}
            helperText="Pesan terlalu panjang"
            rows={4}
          />
        </div>

        {/* COMBINED FORM */}
        <div className="rounded-lg border border-green-200 bg-linear-to-r from-green-50 to-teal-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ✨ Combined Form Example
          </h2>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Contact Form (Input + Textarea)
          </h3>
          <div className="space-y-4">
            <Input label="Full Name" placeholder="John Doe" required />
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+62 812 3456 7890"
              helperText="Format: +62 xxx xxxx xxxx"
            />
            <Input
              label="Subject"
              placeholder="Subject pesan Anda"
              showCharCount
              maxChars={100}
              required
            />
            <Textarea
              label="Message"
              placeholder="Tulis pesan lengkap Anda di sini..."
              showCharCount
              maxChars={500}
              helperText="Jelaskan kebutuhan Anda dengan detail"
              required
              rows={6}
            />
            <button className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
