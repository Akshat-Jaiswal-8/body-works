import { apiCaller } from "../../lib/apiCaller.ts";

export const getRoutines = async (
  searchName: string | undefined,
  limit: number,
  page: number,
): Promise<IRoutine[]> => {
  const routines = await apiCaller.get<IRoutinesResponse>("routines", {
    params: {
      search: searchName,
      limit,
      page,
    },
  });
  return routines?.data?.finalData;
};
