import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainBodyParts from '../features/body-parts/MainBodyParts.tsx';
import { useBodyParts } from '../features/body-parts/useBodyParts.tsx';

function BodyParts() {
  const { isLoading, error } = useBodyParts();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainBodyParts />
      </div>
    </>
  );
}
export default BodyParts;
