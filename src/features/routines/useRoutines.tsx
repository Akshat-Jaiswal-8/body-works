import { useQuery } from '@tanstack/react-query';
import { getRoutines } from '../../services/apiRoutines.ts';

interface ISearchNameProp {
  searchName: string;
}
export const UseRoutines = ({ searchName }: ISearchNameProp) => {
  const {
    isLoading,
    data: routines,
    error,
  } = useQuery({
    queryKey: ['routines'],
    queryFn: () => getRoutines({ searchName }),
  });
  return { isLoading, routines, error };
};

export default UseRoutines;
