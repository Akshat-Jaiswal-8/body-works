import Sidebar from '../ui/Sidebar.tsx';
import MainBodyPart from '../features/body-parts/MainBodyPart.tsx';

function BodyPart() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainBodyPart />
      </div>
    </>
  );
}
export default BodyPart;
