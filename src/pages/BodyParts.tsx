import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainBodyPart from '../features/body-parts/MainBodyPart.tsx';
import { useBodyPart } from '../features/body-parts/useBodyPart.tsx';

function BodyParts() {
  const { isLoading, error } = useBodyPart();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainBodyPart />
      </div>
    </>
  );
}
export default BodyParts;
