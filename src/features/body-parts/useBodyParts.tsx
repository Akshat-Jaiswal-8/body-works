import { useQuery } from '@tanstack/react-query';
import { getBodyParts } from '../../services/apiBodyParts.ts';

export const useBodyParts = () => {
  const {
    isLoading,
    data: bodyParts,
    error,
  } = useQuery({
    queryKey: ['body-parts'],
    queryFn: getBodyParts,
  });
  return { isLoading, bodyParts, error };
};
