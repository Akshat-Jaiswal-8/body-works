import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getRoutines } from '@/services/apiRoutines.ts';

interface ISearchNameProp {
  searchName: string;
}
export const UseRoutines = ({ searchName }: ISearchNameProp, limit: number, page: number) => {
  const {
    isLoading,
    data: routines,
    error,
  } = useQuery({
    queryKey: ['routines', limit, page],
    queryFn: () => getRoutines({ searchName }, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, routines, error };
};

export default UseRoutines;
