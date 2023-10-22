import { useQuery } from "@tanstack/react-query";
import { getTargetMuscle } from "../../services/apiTargetMuscle.ts";

export const useTargetMuscle = () => {
  const {
    isLoading,
    data: targetMuscle,
    error,
  } = useQuery({
    queryKey: ["target-muscle"],
    queryFn: getTargetMuscle,
  });
  return { isLoading, targetMuscle, error };
};
