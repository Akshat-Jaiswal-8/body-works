import { apiCaller } from "../../lib/apiCaller.ts";
import { toast } from "@/hooks/use-toast.ts";

export const getExercise = async (exerciseId: string | undefined): Promise<IExercise> => {
  if (!exerciseId)
    toast({
      variant: "destructive",
      title: "Exercise ID is required",
      description: "Please provide an exercise ID",
    });
  const exercise = await apiCaller.get<IExerciseResponse>(`exercises/${exerciseId}`);
  return exercise.data.data;
};
