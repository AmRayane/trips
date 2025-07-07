import { useMutation } from "@tanstack/react-query";
import { getExistingUser, login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import { account } from "../../services/appwrite";
import toast from "react-hot-toast";
type Userdatatype = { email: string; password: string };
export function useLogin() {
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: login } = useMutation<
    void,
    Error,
    Userdatatype
  >({
    mutationFn: async (userData) => {
      return await loginApi(userData.email, userData.password);
    },
    onSuccess: async () => {
      const user = await account.get();
      const existingUser = await getExistingUser(user.$id);
      console.log(existingUser?.status);
      if (existingUser?.status === "admin") navigate("admin/dashboard");
      if (existingUser?.status === "client") navigate("client");
      toast.success(`Welcome ${existingUser?.name}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isLoading, login };
}
