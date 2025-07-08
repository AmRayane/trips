import { getUser } from "../../services/apiAuth";
import { redirect } from "react-router";

export default async function protectLoader() {
  const user = await getUser();
  if (!user) redirect("/");
  if (user?.status === "client") {
    return redirect("/client");
  }
}
