import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Inputs } from "../../types";
import { addNewUser as addUserApi } from "../../services/apiUsers";
import toast from "react-hot-toast";
export function useAddUser() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: addNewUser } = useMutation({
    mutationFn: (user: Inputs) => addUserApi(user),
    onSuccess: () => (
      toast.success("User added successfully!"),
      queryClient.invalidateQueries({
        queryKey: ["users"],
      })
    ),
    onError: () => toast.error("Failed to add user: "),
  });
  return { isLoading, addNewUser };
}
