import { useQuery } from "@tanstack/react-query";
import { getBodyPart } from "../../services/apiBodyPart.ts";

export const useBodyPart = () => {
  const {
    isLoading,
    data: bodyParts,
    error,
  } = useQuery({
    queryKey: ["body-part"],
    queryFn: getBodyPart,
  });
  return { isLoading, bodyParts, error };
};
