import Sidebar from '../ui/Sidebar.tsx';
import MainBodyParts from '../features/body-parts/MainBodyParts.tsx';

function BodyParts() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainBodyParts />
      </div>
    </>
  );
}
export default BodyParts;
