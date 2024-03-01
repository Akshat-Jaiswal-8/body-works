import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import { useEquipments } from '../features/Equipments/useEquipments.tsx';
import MainEquipments from '../features/Equipments/MainEquipments.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function Equipments() {
  const { isLoading, error } = useEquipments();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh] '>
        <Sidebar />
        <MainEquipments />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Equipments;
