import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  getJobWithInformationById,
  getJobsWithInformation,
  updateJob,
} from '@/lib/database';
import { useState } from 'react';

import { Job } from '@/types/database';

export const useJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = getAllJobs();
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getJob = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = getJobById(id);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getJobsWithInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = getJobsWithInformation();
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getJobWithInfo = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = getJobWithInformationById(id);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createNewJob = async (
    data: Omit<Job, 'id' | 'created_at' | 'updated_at'>,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = createJob(data);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateExistingJob = async (id: number, data: Partial<Job>) => {
    setLoading(true);
    setError(null);

    try {
      const result = updateJob(id, data);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteExistingJob = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = deleteJob(id);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    getJobs,
    getJob,
    getJobsWithInfo,
    getJobWithInfo,
    createJob: createNewJob,
    updateJob: updateExistingJob,
    deleteJob: deleteExistingJob,
    loading,
    error,
  };
};
