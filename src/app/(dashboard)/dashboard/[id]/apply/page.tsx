'use client';

import Typography from '@/components/Typography';
import { FileUpload } from '@/components/ui/FileUpload';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { SelectInput } from '@/components/ui/SelectInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApplication } from '@/hooks/useApplicationHook';
import { useInformation } from '@/hooks/useInformationHook';
import { useJob } from '@/hooks/useJobHook';
import { Information, Job } from '@/types/database';
import {
  JobApplicationFormData,
  jobApplicationSchema,
} from '@/validations/applicationJob';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ApplicantSent from '../../(container)/ApplicantSent';

export default function JobApplicationForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const methods = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      name: '',
      date: '',
      gender: undefined,
      domicile: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      photo: undefined,
    },
  });

  const [currentJobs, setCurrentJobs] = useState<Job | null>(null);
  const [step, setStep] = useState<Information>();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { getJob } = useJob();
  const { applyForJob } = useApplication();
  const { getInformation } = useInformation();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await getJob(Number(id));
        const resultStep = await getInformation(
          result?.information_id as number,
        );

        setStep(resultStep);
        setCurrentJobs(result as Job);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const onSubmit = async (data: JobApplicationFormData) => {
    setSubmitting(true);

    try {
      const result = await applyForJob(Number(id), data);

      if (result.success) {
        toast.success('Your application has been submitted successfully');
        methods.reset();
      } else {
        toast.error(result.error || 'Failed to submit application');
      }
    } catch (_err) {
      toast.error('An error occurred while submitting application');
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div>Loading job details...</div>
      </div>
    );
  }

  return submitting ? (
    <ApplicantSent />
  ) : (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 p-4">
      <div className="scrollbar-hide relative h-[95vh] w-full max-w-2xl space-y-2 overflow-y-auto rounded-lg bg-white shadow-sm">
        <div className="flex items-center justify-between p-8 pb-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="block">
              <ArrowLeft size={20} />
            </Link>

            <h1 className="text-xl font-semibold text-gray-900">
              Apply {currentJobs?.name} at Rakamin
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-3 w-3 rounded-sm bg-red-500"></span>
            <Typography variant="m">This field is required to fill</Typography>
          </div>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="space-y-6 px-8 pb-8">
              <div className="text-sm text-red-500">* Required</div>

              {step?.photo && (
                <div>
                  <FileUpload
                    id="photo"
                    label="Photo Profile"
                    variant="avatar"
                    accept="image/*"
                    maxSize={3000000}
                    required={step.photo === 2}
                    helperText="Upload your profile picture (max 3MB)"
                  />
                </div>
              )}

              {step?.full_name && (
                <div>
                  <Input
                    id="name"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full"
                    required={step.full_name === 2}
                  />
                </div>
              )}

              {step?.birth_date && (
                <div>
                  <Input
                    id="date"
                    label="Date of birth"
                    type="date"
                    placeholder="Select date of birth"
                    className="w-full"
                    required={step.birth_date === 2}
                  />
                </div>
              )}

              {step?.gender && (
                <div>
                  <RadioGroup
                    id="gender"
                    label="Pronouns (Gender)"
                    required={step.gender === 2}
                    options={[
                      { label: 'She/her (Female)', value: 'female' },
                      { label: 'He/him (Male)', value: 'male' },
                    ]}
                  />
                </div>
              )}

              {step?.domicile && (
                <div>
                  <SelectInput
                    id="domicile"
                    label="Domicile"
                    required={step.domicile === 2}
                    placeholder="Select your domicile"
                    options={[
                      { value: 'jakarta', label: 'Jakarta' },
                      { value: 'bandung', label: 'Bandung' },
                      { value: 'surabaya', label: 'Surabaya' },
                      { value: 'yogyakarta', label: 'Yogyakarta' },
                      { value: 'medan', label: 'Medan' },
                    ]}
                  />
                </div>
              )}

              {step?.phone_number && (
                <div className="w-full">
                  <div className="mb-2">
                    <Typography variant="m" className="text-gray-700">
                      Phone number<span className="text-danger-main">*</span>
                    </Typography>
                  </div>

                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        defaultValue="+62"
                        className="appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 pr-8 text-sm text-gray-700 outline-none focus:border-transparent focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="+62">🇮🇩 +62</option>
                        <option value="+60">🇲🇾 +60</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+66">🇹🇭 +66</option>
                        <option value="+63">🇵🇭 +63</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-400"
                      />
                    </div>

                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="81234567890"
                      required={step.phone_number === 2}
                      className="h-full"
                    />
                  </div>
                </div>
              )}

              {step?.email && (
                <div>
                  <Input
                    id="email"
                    label="Enter your email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                    required={step.email === 2}
                  />
                </div>
              )}

              {step?.linkedin && (
                <div>
                  <Input
                    id="linkedin"
                    label="LinkedIn Profile"
                    type="text"
                    placeholder="Enter your LinkedIn profile URL"
                    className="w-full"
                    required={step.linkedin === 2}
                  />
                </div>
              )}
            </div>

            <div className="bg-neutral-10 sticky bottom-0 w-full border-t-2 p-6">
              <div className="w-full border">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
