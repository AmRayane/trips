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
    <div className="flex h-[100vh] items-center justify-center bg-auth bg-cover bg-center">
      <div className="flex max-w-md flex-col items-center gap-3 rounded-20 bg-white p-6 shadow-500">
        <Logo />
        <div>
          <h2 className="text-[28px] font-semibold text-dark-100">
            Admin dashboard login
          </h2>
        </div>
        <form action="" className="flex w-[100%] flex-col gap-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[30px] rounded-lg bg-[#eaecf0] p-2"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="h-[30px] rounded-lg bg-[#eaecf0] p-2"
          />
          <div className="mt-4 flex w-full gap-2">
            <button
              disabled={disabled || isLoading}
              onClick={(e) => (e.preventDefault(), login({ email, password }))}
              className="flex-1 rounded-lg bg-[#eaecf0] px-6 py-3 font-bold text-white disabled:cursor-not-allowed"
            >
              Sign in
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
