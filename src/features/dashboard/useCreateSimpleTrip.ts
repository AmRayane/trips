import { useMutation } from "@tanstack/react-query";
import type { Trip } from "../../types";
import { createTrip as creatrTripApi } from "../../services/apiTrips";
import toast from "react-hot-toast";
export function useCreateSimpleTrip() {
  const { isPending: isLoading, mutate: createTrip } = useMutation({
    mutationFn: (trip: Trip) => creatrTripApi(trip),
    onSuccess: () => toast.success("Trip created successfully!"),
    onError: (err) => {
      console.log(err.message);
      toast.error("Failed to create trip. Please try again.");
    },
  });
  return { isLoading, createTrip };
}
