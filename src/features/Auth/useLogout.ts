import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: logout } = useMutation({
    mutationFn: async () => {
      await logoutUser();
    },
    onSuccess: () => {
      toast.success("Logout successful");
      navigate("/");
    },
  });
  return { isLoading, logout };
}
