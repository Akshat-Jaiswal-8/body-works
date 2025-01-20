import { apiCaller } from "../../lib/apiCaller.ts";

export const getRoutineCategories = async (): Promise<IRoutineCategory[]> => {
  const routineCategory = await apiCaller.get<IRoutineCategoryResponse>("routines/filters");
  return routineCategory.data.data;
};
