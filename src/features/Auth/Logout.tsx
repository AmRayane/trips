import { useGetUser } from "./useGetUser";
import { TbLogout2 } from "react-icons/tb";
import { useLogout } from "./useLogout";

export default function Logout() {
  const { isLoading, user } = useGetUser();
  const { isLoading: isLoading2, logout } = useLogout();
  console.log(user);
  if (isLoading) return;
  return (
    <div className="flex w-[192px] items-start gap-3 md:items-center">
      <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
        <img src={user?.image} alt="" />
      </div>
      <div className="w-[110px] overflow-hidden">
        <p className="font-bold">{user?.name}</p>
        <p className=" ">{user?.email}</p>
      </div>
      <button
        disabled={isLoading2}
        className="w-[20px] pt-2"
        onClick={() => logout()}
      >
        <TbLogout2 size={22} color="red" />
      </button>
    </div>
  );
}
