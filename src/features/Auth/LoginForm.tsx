import { loginWithGoogle } from "../../services/apiAuth";
import Logo from "../../ui/Logo";
import { useState } from "react";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoading, login } = useLogin();
  function handleLoginWithGoogle() {
    loginWithGoogle();
  }

  const disabled: boolean = !email || !password;

  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center bg-auth bg-cover bg-center">
      <div className="absolute inset-0 bg-[#ffffff31]"></div>
      <div className="z-10 mb-3 flex flex-col items-center">
        <Logo />
        <div>
          <h2 className="text-[28px] font-semibold text-dark-100">
            Log in to your account
          </h2>
        </div>
      </div>
      <div className="z-10 flex w-[420px] max-w-md flex-col items-center gap-3 rounded-20 bg-white p-6 shadow-500">
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
              onClick={(e) => (e.preventDefault(), login({ email, password }))}
              className="flex-1 rounded-lg bg-dark-100 px-6 py-3 font-bold text-white disabled:cursor-not-allowed"
            >
              Log in
            </button>
            <button
              onClick={handleLoginWithGoogle}
              disabled={disabled || isLoading}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-100 px-6 py-3 font-bold text-white"
            >
              <img src="/google.svg" /> Goolge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
