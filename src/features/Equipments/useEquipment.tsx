import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getEquipment } from '@/services/apiEquipment.ts';

export const useEquipment = (equipment: string | undefined, limit: number, page: number) => {
  const {
    isLoading,
    data: Equipment,
    error,
  } = useQuery({
    queryKey: ['equipment', limit, page],
    queryFn: () => getEquipment(equipment, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, Equipment, error };
};
