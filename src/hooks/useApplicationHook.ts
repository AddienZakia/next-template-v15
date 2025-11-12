import { createApplicant, getApplicationsByJobId } from '@/lib/database';
import { Member } from '@/types/database';
import { JobApplicationFormData } from '@/validations/applicationJob';
import { useState } from 'react';

export const useApplication = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getApplications = async (jobId: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = getApplicationsByJobId(jobId);
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

  const applyForJob = async (
    jobId: number,
    formData: JobApplicationFormData,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const applicantData: Omit<Member, 'id' | 'created_at' | 'updated_at'> = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phoneNumber,
        birth_date: formData.date,
        domicile: formData.domicile,
        gender: formData.gender,
        linkedin: formData.linkedin,
        job_id: jobId,
      };

      const createdApplicant = await createApplicant(applicantData);

      return {
        success: true,
        applicant: createdApplicant,
      };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    getApplications,
    applyForJob,
    loading,
    error,
  };
};
