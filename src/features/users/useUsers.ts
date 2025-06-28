import { useQuery } from "@tanstack/react-query";
import type { User } from "../../types";
import { getUsers } from "../../services/apiUsers";
export function useUsers(): { data: undefined | User[]; isLoading: boolean } {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(1),
  });
  return { data, isLoading };
}
