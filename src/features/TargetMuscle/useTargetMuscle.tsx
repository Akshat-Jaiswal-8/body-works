import { useQuery } from '@tanstack/react-query';
import { getTargetMuscle } from '../../services/apiTargetMuscle.ts';

export const useTargetMuscle = (targetMuscle: string | undefined) => {
  const {
    isLoading,
    data: TargetMuscle,
    error,
  } = useQuery({
    queryKey: ['target-muscle'],
    queryFn: () => getTargetMuscle(targetMuscle),
  });
  return { isLoading, TargetMuscle, error };
};
