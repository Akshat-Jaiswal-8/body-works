import { useQuery } from '@tanstack/react-query';
import { getRoutine } from '../../services/apiRoutine.ts';

interface ISearchNameProp {
  searchName: string;
}
export const UseRoutine = ({ searchName }: ISearchNameProp) => {
  const {
    isLoading,
    data: routine,
    error,
  } = useQuery({
    queryKey: ['routine'],
    queryFn: () => getRoutine({ searchName }),
  });
  return { isLoading, routine, error };
};

export default UseRoutine;
