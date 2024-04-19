import Sidebar from '../ui/Sidebar.tsx';
import MainExercises from '../features/Exercises/MainExercises.tsx';

function Exercises() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainExercises />
      </div>
    </>
  );
}
export default Exercises;
