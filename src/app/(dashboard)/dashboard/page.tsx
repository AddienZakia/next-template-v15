'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { useJob } from '@/hooks/useJobHook';
import { cn } from '@/lib/utils';
import { Job } from '@/types/database';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import JobCard from './(components)/JobCard';
import DashboardLayout from './(container)/DashboardLayout';
import JobNotFound from './(container)/JobNotFound';

export default function page() {
  const [listJobs, setListJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState<number>(0);

  const { getJobs, loading } = useJob();

  useEffect(() => {
    const fetchJobs = async () => {
      const getAllJobs = await getJobs();
      const filteredJobs = getAllJobs.filter((job) => job.status === 'active');

      setListJobs(filteredJobs);
    };

    fetchJobs();
  }, []);

  const selectedJobs = listJobs.find((job) => job.id === selected);

  return !loading && listJobs.length === 0 ? (
    <JobNotFound />
  ) : (
    <DashboardLayout>
      <section className="flex items-start justify-between space-x-6">
        <div className="card-scrollbar max-h-screen space-y-2 overflow-y-auto pr-2 max-md:w-full lg:w-[35%]">
          {listJobs.map((job, i) => (
            <div key={i} onClick={() => setSelected(job.id)}>
              <JobCard jobData={job} selected={selected === job.id} />
            </div>
          ))}
        </div>

        <div className="min-h-[50vh] rounded-lg border p-6 max-md:w-full lg:w-[65%]">
          {!selected ? (
            <div className="flex flex-col items-center space-y-4 py-6">
              <Image
                src="/images/admin/no-candidate.png"
                width={612}
                height={600}
                alt="assets"
                className="w-[30%] max-md:w-[50%]"
              />

              <div className="flex flex-col items-center">
                <Typography variant="hs" weight="bold">
                  No job openings
                </Typography>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between pb-4">
                <div className="flex items-start space-x-4">
                  <Image
                    src={'/images/logo-rect.png'}
                    width={75}
                    height={75}
                    alt="assets"
                    className=""
                  />

                  <div className="space-y-2">
                    <div
                      className={cn(
                        'bg-success-main',
                        'w-fit rounded-sm px-3 py-1 text-center',
                      )}
                    >
                      <Typography
                        variant="s"
                        weight="bold"
                        className="text-neutral-10 block"
                      >
                        {selectedJobs?.type}
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="xl" weight="bold">
                        {selectedJobs?.name}
                      </Typography>

                      <Typography variant="m">Rakamin</Typography>
                    </div>
                  </div>
                </div>

                <Link href={`/dashboard/${selected}/apply`} className="block">
                  <Button variant={'alternative'} size="sm">
                    Apply
                  </Button>
                </Link>
              </div>

              <div className="bg-[repeating-linear-gradient(to_right,#d1d5db_0,#d1d5db_7px,transparent_7px,transparent_15px)] bg-size-[100%_1.5px] bg-top bg-repeat-x pt-4">
                <p>{selectedJobs?.description}</p>
              </div>
            </>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}
