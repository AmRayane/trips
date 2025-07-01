import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: deleteUser } = useMutation({
    mutationFn: (userId: string) => deleteUserApi(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
  return { isLoading, deleteUser };
}
