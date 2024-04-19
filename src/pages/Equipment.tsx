import Sidebar from '../ui/Sidebar.tsx';
import { useParams } from 'react-router-dom';
import { IExercise } from '../services/apiExercises.ts';
import { useEquipment } from '../features/Equipments/useEquipment.tsx';
import MainEquipment from '../features/Equipments/MainEquipment.tsx';

function Equipment() {
  const { equipment } = useParams();
  const {
    Equipment,
  }: {
    Equipment: IExercise | undefined;
  } = useEquipment(equipment);

  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainEquipment Equipment={Equipment} />
      </div>
    </>
  );
}
export default Equipment;
