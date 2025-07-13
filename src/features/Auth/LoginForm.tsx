import { loginWithGoogle } from "../../services/apiAuth";
import { FaGoogle } from "react-icons/fa6";
import { useState } from "react";
import { useLogin } from "./useLogin";
import Logo from "../../ui/Logo";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoading, login } = useLogin();

  const disabled: boolean = !email || !password;

  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center bg-auth bg-cover bg-center">
      <div className="absolute inset-0 bg-[#ffffff31]"></div>

      <div className="z-10 flex w-[420px] max-w-md flex-col items-center gap-3 rounded-20 bg-white p-6 shadow-md">
        <div>
          <Logo />
        </div>
        <form action="" className="flex w-[100%] flex-col divide-y-2">
          <div className="flex items-center justify-between py-3">
            <label htmlFor="">Email address</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[30px] rounded-lg border bg-white p-4"
            />
          </div>
          <div className="flex items-center justify-between py-3">
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="h-[30px] rounded-lg border bg-white p-4"
            />
          </div>
          <div className="flex w-full gap-2 py-3">
            <button
              disabled={disabled || isLoading}
              onClick={(e) => {
                e.preventDefault();
                login({ email, password });
              }}
              className="flex-1 cursor-pointer rounded-lg bg-dark-100 px-6 py-3 font-bold text-white shadow-md disabled:cursor-not-allowed"
            >
              Log in
            </button>
            <button
              onClick={() => {
                loginWithGoogle();
              }}
              disabled={isLoading}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-dark-100 shadow-md"
            >
              <FaGoogle />
              Goolge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
