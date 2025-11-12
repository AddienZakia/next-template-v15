'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useJob } from '@/hooks/useJobHook';
import { Job } from '@/types/database';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import JobCard from '../(component)/JobCard';
import { JobOpeningModal } from '../(component)/ModalJobCreate';
import DashboardLayout from '../(container)/DashboardLayout';
import JobNotFound from '../(container)/JobNotFound';

export default function page() {
  const [open, setOpen] = useState(false);
  const methods = useForm({ defaultValues: { filter: '' } });

  const [listJobs, setListJobs] = useState<Job[]>([]);

  const { getJobsWithInfo } = useJob();

  useEffect(() => {
    const getAllJobs = async () => {
      const results = await getJobsWithInfo();
      setListJobs(results);
    };

    getAllJobs();
  }, []);

  return (
    <>
      <JobOpeningModal open={open} onOpenChange={setOpen} />

      <DashboardLayout>
        <section className="flex gap-6 max-lg:flex-col-reverse">
          <div className="max-lg:w-full lg:w-[75%]">
            <FormProvider {...methods}>
              <div className="relative flex items-center">
                <Input
                  id="filter"
                  placeholder="Search by job details"
                  className="py-5"
                />

                <MagnifyingGlassIcon className="text-primary-main absolute right-4 mt-1 w-5" />
              </div>
            </FormProvider>

            <div className="min-h-full flex-1">
              {listJobs.length === 0 ? (
                <JobNotFound />
              ) : (
                <div className="mt-4">
                  {listJobs.map((job, i) => (
                    <JobCard dataJob={job} key={i} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="max-lg:w-full lg:w-[25%]">
            <div className="w-full space-y-4 rounded-xl bg-black/30 bg-[url(/images/admin/popup-bg.png)] bg-cover p-6 bg-blend-overlay">
              <div className="space-y-1">
                <Typography
                  variant="hs"
                  weight="bold"
                  className="text-neutral-10"
                >
                  Recruit the best candidates
                </Typography>

                <Typography variant="l" className="text-neutral-10">
                  Create jobs, invite, and hire with ease
                </Typography>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setOpen(true)}
              >
                Create a new job
              </Button>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
}
