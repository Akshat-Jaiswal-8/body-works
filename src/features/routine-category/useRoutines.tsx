import { useQuery } from '@tanstack/react-query';
import { getRoutineCategories } from '../../services/apiRoutineCategory.ts';

export const useRoutines = () => {
  const {
    isLoading,
    data: routineCategory,
    error,
  } = useQuery({
    queryKey: ['routine-categories'],
    queryFn: getRoutineCategories,
  });
  return { isLoading, routineCategory, error };
};
