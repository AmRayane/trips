import { useQuery } from "@tanstack/react-query";
import type { User } from "../../types";
import { getTodaysUser } from "../../services/apiUsers";

export function useLatestUsers(): {
  isLoading: boolean;
  data: User[] | undefined;
} {
  const { data, isPending: isLoading } = useQuery<User[]>({
    queryKey: ["latestusers"],
    queryFn: getTodaysUser,
  });
  return { isLoading, data };
}
