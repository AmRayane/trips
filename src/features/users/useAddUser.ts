import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Inputs } from "../../types";
import { addNewUser as addUserApi } from "../../services/apiUsers";
export function useAddUser() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: addNewUser } = useMutation({
    mutationFn: (user: Inputs) => addUserApi(user),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["users"],
      }),
    onError: (error) => console.log(error),
  });
  return { isLoading, addNewUser };
}
