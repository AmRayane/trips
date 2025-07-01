import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MAX_PAGE, type PaginatedUsersResponse } from "../../types";
import { getUsers } from "../../services/apiUsers";
import { useSearchParams } from "react-router";
export function useUsers(): {
  data: undefined | PaginatedUsersResponse;
  isLoading: boolean;
} {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<PaginatedUsersResponse>({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
  });
  const maxPages = Math.ceil(MAX_PAGE / (data?.total ?? 1));
  if (page < maxPages)
    queryClient.prefetchQuery({
      queryKey: ["users", page + 1],
      queryFn: () => getUsers(page + 1),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["users", page - 1],
      queryFn: () => getUsers(page - 1),
    });
  return { data, isLoading };
}
