import { redirect } from "react-router";
import toast from "react-hot-toast";
import { getUser } from "../services/apiAuth";

export default async function protectLoader() {
  const user = await getUser();
  if (!user) redirect("/");
  if (user?.status === "user")
    return (
      toast.error("You are not allowed to access this page"),
      redirect("/user")
    );
}
