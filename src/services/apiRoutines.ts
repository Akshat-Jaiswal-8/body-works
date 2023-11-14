import axios from 'axios';

type IRoutinesProps = {
  searchName: string;
};
const getRoutines = async ({ searchName }: IRoutinesProps) => {
  const routines = await axios.get(
    `https://body-works.vercel.app/api/routine?search=${searchName}`,
  );
  return routines?.data?.data;
};

export { getRoutines };
