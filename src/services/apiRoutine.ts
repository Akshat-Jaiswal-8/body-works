import { apiCaller } from "../../lib/apiCaller.ts";

type IRoutinesProps = {
  routineId: string | undefined;
};
export const getRoutine = async ({ routineId }: IRoutinesProps): Promise<IRoutine> => {
  const routine = await apiCaller.get<IRoutine>(`routines/${routineId}`);
  return routine.data;
};
