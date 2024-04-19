import { useQuery } from '@tanstack/react-query';
import { getBodyPart } from '../../services/apiBodyPart.ts';

export const useBodyPart = (bodypart: string | undefined) => {
  const {
    isLoading,
    data: bodyPart,
    error,
  } = useQuery({
    queryKey: ['body-part'],
    queryFn: () => getBodyPart(bodypart),
  });
  return { isLoading, bodyPart, error };
};
