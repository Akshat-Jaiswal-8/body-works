// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEquipments } from './useEquipments.tsx';
import { IEquipments } from '../../services/apiEquipments.ts';
import EquipmentCard from './EquipmentCard.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

function MainEquipments() {
  const { equipments } = useEquipments();

  return (
    <>
      <SearchBar>
        <div className='grid grid-cols-3 col-span-4 gap-8 mx-12 mt-10'>
          {equipments.map((equipment: IEquipments) => {
            return (
              <EquipmentCard
                key={equipment.equipment}
                name={equipment.equipment}
                image={equipment.imageUrl}
              />
            );
          })}
        </div>
      </SearchBar>
    </>
  );
}

export default MainEquipments;
