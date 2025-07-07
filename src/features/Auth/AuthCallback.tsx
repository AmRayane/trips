import { useEffect } from "react";
import { account } from "../../services/appwrite";
import { getExistingUser } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export default function AuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    async function initAuth() {
      try {
        const authUser = await account.get();
        const existingUser = await getExistingUser(authUser.$id);
        if (!existingUser) {
          return navigate("/");
        }
        if (existingUser.status === "admin") {
          return navigate("/admin/dashboard");
        }
        return navigate("/client");
      } catch (error) {
        console.error("Erreur de connexion :", error);
        navigate("/");
      }
    }
    initAuth();
  }, []);

  return <div>succesfully</div>;
}
