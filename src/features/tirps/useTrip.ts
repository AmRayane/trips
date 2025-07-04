import { useQuery } from "@tanstack/react-query";
import { getTripById } from "../../services/apiTrips";

export function useTrip(id: string) {
  const { isPending: isLoading, data: trip } = useQuery({
    queryKey: ["trip"],
    queryFn: () => getTripById(id),
  });
  return { isLoading, trip };
}
