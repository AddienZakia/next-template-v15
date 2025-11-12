import {
  createInformation,
  getAllInformation,
  getInformationById,
} from '@/lib/database';
import { useState } from 'react';

import { Information } from '@/types/database';

export const useInformation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getInformations = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = getAllInformation();
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

  const getInformation = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = getInformationById(id);
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

  const createNewInformation = async (data: Omit<Information, 'id'>) => {
    setLoading(true);
    setError(null);

    try {
      const result = createInformation(data);
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
    getInformations,
    getInformation,
    createInformation: createNewInformation,
    loading,
    error,
  };
};
