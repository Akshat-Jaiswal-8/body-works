import { useQuery } from '@tanstack/react-query';
import { getEquipment } from '../../services/apiEquipment.ts';

export const useEquipment = (equipment: string | undefined) => {
  const {
    isLoading,
    data: Equipment,
    error,
  } = useQuery({
    queryKey: ['equipment'],
    queryFn: () => getEquipment(equipment),
  });
  return { isLoading, Equipment, error };
};
