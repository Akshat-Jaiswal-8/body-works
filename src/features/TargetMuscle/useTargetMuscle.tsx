import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTargetMuscle } from '@/services/apiTargetMuscle.ts';

export const useTargetMuscle = (targetMuscle: string | undefined, limit: number, page: number) => {
  const {
    isLoading,
    data: TargetMuscle,
    error,
  } = useQuery({
    queryKey: ['target-muscle', limit, page],
    queryFn: () => getTargetMuscle(targetMuscle, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, TargetMuscle, error };
};
