import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function useErrorHandler() {
  const { toast } = useToast();

  const handleError = (error: Error, refetch?: () => void) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error.message,
      action: refetch ? (
        <ToastAction onClick={refetch} altText="Try again">
          Try again
        </ToastAction>
      ) : undefined,
    });
  };

  return { handleError };
}
