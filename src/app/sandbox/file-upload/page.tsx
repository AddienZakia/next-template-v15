'use client';
import { FileUpload } from '@/components/ui/FileUpload';
import { Check } from 'lucide-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface FormDataType {
  avatar: File | null;
  document: File | null;
  resume: File | null;
}

export default function FileUploadSandbox(): JSX.Element {
  const methods = useForm<FormDataType>({
    defaultValues: {
      avatar: null,
      document: null,
      resume: null,
    },
  });

  const { handleSubmit, reset, watch } = methods;

  const onSubmit: SubmitHandler<FormDataType> = () => {
    // console.log('Form Data:', data);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              File Upload Component Sandbox
            </h1>
            <p className="text-gray-600">
              Test the FileUpload component with different variants and
              configurations
            </p>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Avatar Variant */}
              <div className="rounded-xl bg-gray-50 p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Avatar Variant
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  Perfect for profile pictures with circular preview
                </p>
                <FileUpload
                  id="avatar"
                  label="Photo Profile"
                  variant="avatar"
                  accept="image/*"
                  maxSize={5000000}
                  required
                  helperText="Upload your profile picture (max 5MB)"
                />
              </div>

              {/* Default Box Variant */}
              <div className="rounded-xl bg-gray-50 p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Default Box Variant
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  Standard upload box with drag & drop area
                </p>
                <FileUpload
                  id="document"
                  label="Upload Image"
                  variant="default"
                  accept="image/*"
                  maxSize={5000000}
                  helperText="PNG, JPG, or WEBP (max 5MB)"
                />
              </div>

              {/* Any File Type */}
              <div className="rounded-xl bg-gray-50 p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Any File Type
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  Accept PDF, DOC, and other file types (Preview won't work for
                  non-images)
                </p>
                <FileUpload
                  id="resume"
                  label="Upload Resume/CV"
                  variant="default"
                  accept=".pdf,.doc,.docx"
                  maxSize={10000000}
                  helperText="PDF or DOC format (max 10MB)"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700"
                >
                  <Check size={20} />
                  Submit Form
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition-colors hover:bg-gray-50"
                >
                  Reset
                </button>
              </div>
            </form>
          </FormProvider>
        </div>

        {/* Debug Output */}
        <div className="mt-6 rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Live Watch:
          </h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-800">
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
