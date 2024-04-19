import Sidebar from '../ui/Sidebar.tsx';
import MainTargetMuscles from '../features/TargetMuscle/MainTargetMuscles.tsx';

function TargetMuscles() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainTargetMuscles />
      </div>
    </>
  );
}
export default TargetMuscles;
