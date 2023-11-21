import Sidebar from '../ui/Sidebar.tsx';
import Footer from '../ui/Footer.tsx';
import { useParams } from 'react-router-dom';
import Error from './Error.tsx';
import Spinner from '../ui/Spinner.tsx';
import { IExercise } from '../services/apiExercises.ts';
import { useEquipment } from '../features/Equipments/useEquipment.tsx';
import MainEquipment from '../features/Equipments/MainEquipment.tsx';

function Equipment() {
  const { equipment } = useParams();
  const {
    isLoading,
    Equipment,
    error,
  }: {
    isLoading: boolean;
    Equipment: IExercise | undefined;
    error: Error | null;
  } = useEquipment(equipment);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='dark:bg-black grid grid-cols-5 h-full'>
        <Sidebar />
        <MainEquipment Equipment={Equipment} />
      </div>
      <Footer />
    </>
  );
}
export default Equipment;
