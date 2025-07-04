import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrips } from "../../services/apiTrips";
import { useSearchParams } from "react-router";
import { MAX_TRIPS_PAGE } from "../../types";

export function useTrips() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page: number = parseInt(searchParams.get("page") ?? "1");
  const { isPending: isLoading, data } = useQuery({
    queryKey: ["trips", page],
    queryFn: () => getTrips(page),
  });
  const maxPages: number = Math.ceil(data?.total ?? 0 / MAX_TRIPS_PAGE);
  if (page < maxPages) {
    queryClient.prefetchQuery({
      queryKey: ["trips", page + 1],
      queryFn: () => getTrips(page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["trips", page - 1],
      queryFn: () => getTrips(page - 1),
    });
  }
  return { isLoading, data };
}
