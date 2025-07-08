import Logo from "../../ui/Logo";
import { useGetUser } from "../Auth/useGetUser";
import { TbLogout2 } from "react-icons/tb";
import { useLogout } from "../Auth/useLogout";

export default function Header() {
  const { user, isLoading: loadingUser } = useGetUser();
  const { logout, isLoading } = useLogout();

  return (
    <div className="absolute right-0 top-0 z-10 flex w-full items-center justify-between px-mobile py-3 md:px-desktop">
      <Logo />

      {!loadingUser && (
        <div className="flex items-center gap-5">
          <p className="font-semibold text-dark-100">{user?.name}</p>
          <div className="flex h-[40px] w-[40px] content-center items-center overflow-hidden rounded-full">
            <img src={user?.image} alt="" />
          </div>
          <button
            disabled={isLoading}
            onClick={() => logout()}
            className="cursor-pointer disabled:cursor-not-allowed"
          >
            <TbLogout2 color="red" size={25} />
          </button>
        </div>
      )}
    </div>
  );
}
