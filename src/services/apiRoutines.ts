import axios from 'axios';

type IRoutinesProps = {
  searchName: string;
};
const getRoutines = async ({ searchName }: IRoutinesProps, limit: number, page: number) => {
  const routines = await axios.get(
    `https://body-works.vercel.app/api/routine?limit=${limit}&page=${page}&search=${searchName}`,
  );
  return routines?.data?.data;
};

export { getRoutines };
