import axios from 'axios';

interface IRoutine {
  title: string;
  imageUrl: string;
}

const getRoutine = async ({ searchName }) => {
  const routine = await axios.get(
    `https://body-works.vercel.app/api/routine?search=${searchName}`,
  );
  const allroutine = routine?.data?.data;
  return allroutine;
};

export { getRoutine };
export type { IRoutine };
