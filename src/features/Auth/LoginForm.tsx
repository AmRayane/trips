import { redirect } from "react-router";
import {
  getExitingUser,
  loginWithGoogle,
  storeUserData,
} from "../../services/apiAuth";
import { account } from "../../services/appwrite";
import Logo from "../../ui/Logo";
export async function clientLoader() {
  const user = await account.get();
  const exiting = await getExitingUser(user.$id);
  if (!exiting) {
    storeUserData();
  }
  if (exiting?.status === "user") redirect("client");
}

export default function LoginForm() {
  function handleLogin() {
    loginWithGoogle();
  }
  return (
    <div className="bg-center h-[100vh] flex justify-center items-center bg-auth bg-cover">
      <div className=" max-w-md rounded-20 shadow-500  bg-white flex items-center flex-col gap-3 p-6">
        <Logo />
        <div>
          <h2
            className="text-[28px] font-semibold text-dark-100
"
          >
            Admin dashboard login
          </h2>
        </div>
        <p className="text-center text-gray-100">
          Sign in with Google to manage destinations, itineraries, and user
          activity with ease.
        </p>
        <button
          onClick={handleLogin}
          className="flex gap-2 items-center justify-center bg-primary-100 text-white w-[100%] py-3 rounded-lg"
        >
          <img src="/google.svg" /> Sign in with goolge
        </button>
      </div>
    </div>
  );
}
