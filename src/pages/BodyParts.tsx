import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainBodyParts from '../features/body-parts/MainBodyParts.tsx';
import { useBodyParts } from '../features/body-parts/useBodyParts.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function BodyParts() {
  const { isLoading, error } = useBodyParts();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainBodyParts />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default BodyParts;
