import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTripGemini } from "../../services/aiTrip";
import toast from "react-hot-toast";

type TripParams = {
  numberOfDays: number;
  country: string;
  budget: string;
  interests: string;
  travelStyle: string;
  groupType: string;
};
export function useGeminiTrip() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: createGeminiTrip } = useMutation({
    mutationFn: (trip: TripParams) => createTripGemini(trip),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["trips"],
      });
      toast.success("Trip created successfuly");
    },
    onError: () => {
      toast.error("failed to careate trip");
    },
  });

  return { isLoading, createGeminiTrip };
}
