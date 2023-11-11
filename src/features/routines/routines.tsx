import { useParams } from 'react-router-dom';

function Routines() {
  const { routineName } = useParams();
  const searchName: string | undefined = routineName?.replace(/ /g, '%20');
  const url: string = `https://body-works.vercel.app/api/routine?search=${searchName}`;
  return <div className='text-white'>{url}</div>;
}

export default Routines;
