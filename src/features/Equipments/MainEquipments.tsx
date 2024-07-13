import { useEquipments } from './useEquipments.tsx';
import { IEquipments } from '@/services/apiEquipments.ts';
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
      <div className='md:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] mt-[80px] my-6'>
        {/*<SearchBar />*/}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full'>
          {equipments.map((equipment: IEquipments) => {
            return <EquipmentsCard key={equipment.equipment} name={equipment.equipment} image={equipment.imageUrl} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MainEquipments;
