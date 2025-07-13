import { useEffect } from "react";
import { account } from "../../services/appwrite";
import {
  getExistingUser,
  storeUserDataFromGoogle,
} from "../../services/apiAuth";
import { useNavigate } from "react-router";

export default function AuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    async function init() {
      const user = await account.get();
      const existing = await getExistingUser(user.$id);
      if (!existing) {
        await storeUserDataFromGoogle("user");
        navigate("/client");
      } else if (existing.status === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/client");
      }
    }

    init();
  }, []);

  return <div>succesfully</div>;
}
