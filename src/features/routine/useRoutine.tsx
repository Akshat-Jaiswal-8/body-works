import { getRoutine } from '../../services/apiRoutine.ts';
import { useQuery } from '@tanstack/react-query';

type routineId = {
  routineId: string | undefined;
};

function UseRoutine({ routineId }: routineId) {
  const {
    isLoading,
    data: routine,
    error,
  } = useQuery({
    queryKey: ['routine'],
    queryFn: () => getRoutine({ routineId }),
  });
  return { isLoading, routine, error };
}

export default UseRoutine;
