'use client';

import Typography from '@/components/Typography';
import { SelectInput } from '@/components/ui/SelectInput';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useInformation } from '@/hooks/useInformationHook';
import { useJob } from '@/hooks/useJobHook';
import { jobSchema } from '@/validations/job';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export function JobOpeningModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const methods = useForm({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      name: '',
      type: '',
      status: 'draft',
      location: '',
      description: '',
      total_candidate_need: 1,
      min_salary: 0,
      max_salary: 0,
      information_id: 1,
    },
  });

  const { createJob, loading } = useJob();
  const { createInformation } = useInformation();

  // 0 = off, 1 = optional, 2 = required
  const [profileFields, setProfileFields] = useState({
    fullName: 2,
    photoProfile: 2,
    gender: 2,
    domicile: 0,
    email: 0,
    phoneNumber: 0,
    linkedinLink: 0,
    dateOfBirth: 0,
  });

  const toggleFieldStatus = (
    field: keyof typeof profileFields,
    statusIndex: number,
  ) => {
    // field index <= 2 (fullName, photoProfile, gender) required
    const fieldKeys = Object.keys(
      profileFields,
    ) as (keyof typeof profileFields)[];
    const fieldIndex = fieldKeys.indexOf(field);

    if (fieldIndex <= 2) return;

    setProfileFields((prev) => ({
      ...prev,
      [field]: statusIndex,
    }));
  };

  const jobType = [
    { value: 'full-time', label: 'Full-Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'internship', label: 'Internship' },
    { value: 'freelance', label: 'Freelance' },
  ];

  const jobStatus = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'draft', label: 'Draft' },
  ];

  const onSubmit = async (data: z.infer<typeof jobSchema>) => {
    try {
      const informationData = {
        full_name: profileFields.fullName,
        photo: profileFields.photoProfile,
        gender: profileFields.gender,
        domicile: profileFields.domicile,
        email: profileFields.email,
        phone_number: profileFields.phoneNumber,
        linkedin: profileFields.linkedinLink,
        birth_date: profileFields.dateOfBirth,
      };

      const createdInformation = await createInformation(informationData);
      const jobData = {
        ...data,
        information_id: createdInformation.id,
      };

      createJob(jobData).then(() => {
        toast.success('Success create jobs');
        setProfileFields({
          fullName: 2,
          photoProfile: 2,
          gender: 2,
          domicile: 0,
          email: 0,
          phoneNumber: 0,
          linkedinLink: 0,
          dateOfBirth: 0,
        });
        onOpenChange(false);
      });
    } catch (error) {
      toast.error('Error creating job:' + error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="scrollbar-hide max-h-[90vh] w-full max-w-[900px] overflow-y-auto sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="border-b-2 p-6 text-lg font-semibold">
            Job Opening
          </DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="min-h-[90vh] w-full space-y-6 px-6"
          >
            <div className="space-y-6 bg-[repeating-linear-gradient(to_right,#d1d5db_0,#d1d5db_10px,transparent_10px,transparent_20px)] bg-size-[100%_2px] bg-bottom bg-repeat-x pb-6">
              <div className="w-full">
                <Input
                  id="name"
                  label="Job Name"
                  required
                  placeholder="Front-End Developer"
                  className="w-full"
                />
              </div>

              <div className="w-full">
                <SelectInput
                  id="type"
                  label="Job Type"
                  required
                  placeholder="Select job type"
                  options={jobType}
                />
              </div>

              <div className="w-full">
                <SelectInput
                  id="status"
                  label="Job Status"
                  required
                  placeholder="Select job status"
                  options={jobStatus}
                />
              </div>

              <div className="w-full">
                <Textarea
                  id="description"
                  label="Job description"
                  rows={6}
                  placeholder="Develop high-quality and maintain responsive, high-performance web applications..."
                  className="w-full"
                  required
                />
              </div>

              <div className="w-full">
                <Input
                  id="location"
                  label="Job Location"
                  required
                  placeholder="Jakarta Selatan"
                  className="w-full"
                />
              </div>

              <div className="w-full">
                <Input
                  id="total_candidate_need"
                  type="number"
                  label="Number of Candidate Needed"
                  placeholder="Ex. 2"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Typography>Job Salary</Typography>

              <div className="w-full">
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="w-full">
                    <Input
                      id="min_salary"
                      type="number"
                      label="Minimum Estimated Salary"
                      placeholder="Rp 7.500.000"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      id="max_salary"
                      type="number"
                      label="Maximum Estimated Salary"
                      placeholder="Rp 10.000.000"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full space-y-4 rounded-lg border p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Minimum Profile Information Required
                </h3>

                <div className="w-full divide-y px-2">
                  {Object.entries(profileFields).map(([field], i) => (
                    <div
                      key={field}
                      className="flex w-full items-center justify-between py-4"
                    >
                      <span className="text-sm text-gray-700">
                        {field
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            profileFields[
                              field as keyof typeof profileFields
                            ] === 2
                              ? 'primary'
                              : i <= 2 // index (full_name, profile, gender)
                                ? 'disabled'
                                : 'outlined'
                          }
                          className={
                            i <= 2
                              ? 'cursor-not-allowed opacity-50'
                              : 'cursor-pointer'
                          }
                          style={{ pointerEvents: i <= 2 ? 'none' : 'auto' }}
                          onClick={() =>
                            toggleFieldStatus(
                              field as keyof typeof profileFields,
                              2,
                            )
                          }
                        >
                          Mandatory
                        </Badge>
                        <Badge
                          variant={
                            profileFields[
                              field as keyof typeof profileFields
                            ] === 1
                              ? 'primary'
                              : i <= 2 // index (full_name, profile, gender)
                                ? 'disabled'
                                : 'outlined'
                          }
                          className={
                            i <= 2
                              ? 'cursor-not-allowed opacity-50'
                              : 'cursor-pointer'
                          }
                          style={{ pointerEvents: i <= 2 ? 'none' : 'auto' }}
                          onClick={() =>
                            toggleFieldStatus(
                              field as keyof typeof profileFields,
                              1,
                            )
                          }
                        >
                          Optional
                        </Badge>
                        <Badge
                          variant={
                            profileFields[
                              field as keyof typeof profileFields
                            ] === 0
                              ? 'primary'
                              : i <= 2 // index (full_name, profile, gender)
                                ? 'disabled'
                                : 'outlined'
                          }
                          className={
                            i <= 2
                              ? 'cursor-not-allowed opacity-50'
                              : 'cursor-pointer'
                          }
                          style={{ pointerEvents: i <= 2 ? 'none' : 'auto' }}
                          onClick={() =>
                            toggleFieldStatus(
                              field as keyof typeof profileFields,
                              0,
                            )
                          }
                        >
                          Off
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="bg-neutral-10 sticky bottom-0 w-full border-t-2 p-6">
              <Button
                variant="primary"
                type="submit"
                className="bg-teal-600 hover:bg-teal-700"
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Job'}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
