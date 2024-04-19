import { useQuery } from '@tanstack/react-query';
import { getTargetMuscles } from '@/services/apiTargetMuscles.ts';

export const useTargetMuscles = () => {
  const {
    isLoading,
    data: targetMuscle,
    error,
  } = useQuery({
    queryKey: ['target-muscle'],
    queryFn: getTargetMuscles,
  });
  return { isLoading, targetMuscle, error };
};
