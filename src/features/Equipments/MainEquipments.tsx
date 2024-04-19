// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEquipments } from './useEquipments.tsx';
import { IEquipments } from '@/services/apiEquipments.ts';
import SearchBar from '../../ui/SearchBar.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { EquipmentsCard } from '@/features/Equipments/EquipmentsCard.tsx';

function MainEquipments() {
  const { equipments } = useEquipments();
  const { isLoading, error } = useEquipments();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
          {equipments.map((equipment: IEquipments) => {
            return <EquipmentsCard key={equipment.equipment} name={equipment.equipment} image={equipment.imageUrl} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MainEquipments;
