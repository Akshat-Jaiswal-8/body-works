import Sidebar from '../ui/Sidebar.tsx';
import { useParams } from 'react-router-dom';
import { IExercise } from '../services/apiExercises.ts';
import { useTargetMuscle } from '../features/TargetMuscle/useTargetMuscle.tsx';
import MainTargetMuscle from '../features/TargetMuscle/MainTargetMuscle.tsx';

function TargetMuscle() {
  const { targetMuscle } = useParams();
  const {
    TargetMuscle,
  }: {
    TargetMuscle: IExercise | undefined;
  } = useTargetMuscle(targetMuscle);

  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainTargetMuscle TargetMuscle={TargetMuscle} />
      </div>
    </>
  );
}
export default TargetMuscle;
