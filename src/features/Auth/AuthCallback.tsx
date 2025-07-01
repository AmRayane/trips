import { useEffect } from "react";
import { account } from "../../services/appwrite";
import { getExitingUser, storeUserData } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export default function AuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    async function initAuth() {
      try {
        const authUser = await account.get();
        const existingUser = await getExitingUser(authUser.$id);
        if (!existingUser) {
          await storeUserData();
          return navigate("/client");
        }
        if (existingUser.status === "admin") {
          return navigate("/admin/dashboard");
        }
        return navigate("/client");
      } catch (error) {
        console.error("Erreur de connexion :", error);
        navigate("/login");
      }
    }

    initAuth();
  }, []);

  return <div>succesfully</div>;
}
