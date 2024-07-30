import axios from "axios";

type IRoutinesProps = {
  routineId: string | undefined;
};
const getRoutine = async ({ routineId }: IRoutinesProps) => {
  const routine = await axios.get(`https://body-works-api.up.railway.app/routines/${routineId}`);
  return routine?.data;
};

export { getRoutine };
