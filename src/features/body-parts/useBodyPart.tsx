import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getBodyPart } from '../../services/apiBodyPart.ts';

export const useBodyPart = (bodypart: string | undefined, limit: number, page: number) => {
  const {
    isLoading,
    data: bodyPart,
    error,
  } = useQuery({
    queryKey: ['body-part', limit, page],
    queryFn: () => getBodyPart(bodypart, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, bodyPart, error };
};
