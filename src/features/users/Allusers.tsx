import { useUsers } from "./useUsers";
import { fomatDate } from "../../utils/fomatDate";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteUser } from "./useDeleteUser";
import type { User } from "../../types";
import toast from "react-hot-toast";

export default function Allusers() {
  const { data, isLoading } = useUsers();
  const { deleteUser, isLoading: isDeletingUser } = useDeleteUser();

  function handleDeleteUser(user: User) {
    const id: string = user.$id;
    deleteUser(id);
  }

  if (isLoading || isDeletingUser) <p>data is laoding</p>;

  //object for styling user and admin
  const statusStyle = {
    admin: "bg-[#ced5df63] text-[#273040] py-1 px-4   max-w-fit  rounded-3xl",
    user: "bg-[#63cc8f36] text-[#0d5c3b] py-1 px-4 max-w-fit rounded-3xl",
  };
  return (
    <div className=" ">
      {data?.users?.map((user, index) => (
        <div
          className={`grid grid-cols-[40%_40%_17%_3%] items-center px-5 py-4 md:grid-cols-[25%_25%_15%_15%_17%_3%] ${
            index % 2 === 0 ? "bg-[#F9FBFC]" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center overflow-hidden rounded-full">
              <img
                src={user.image}
                alt="user image"
                className="h-[40px] w-[40px]"
              />
              <div className="absolute inset-0 bg-[#0000002f]"></div>
            </div>
            <p className="font-bold">{user.name}</p>
          </div>
          <p>{user.email}</p>
          <p className="hidden md:block">{fomatDate(user.$createdAt)}</p>
          <p className="hidden md:block">{Math.ceil(Math.random() * 10)}</p>
          <p
            className={`${user.status == "admin" ? statusStyle.admin : statusStyle.user} shadow-md`}
          >
            {user.status}
          </p>
          <button
            onClick={() =>
              toast((t) => (
                <span className="flex gap-2">
                  <p>Sure want to delete user ?</p>
                  <button
                    className="rounded-md bg-red-500 p-2 text-white"
                    onClick={() => {
                      handleDeleteUser(user);
                      toast.dismiss(t.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded-md bg-gray-600 px-2 py-1 text-white"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Dismiss
                  </button>
                </span>
              ))
            }
          >
            <AiOutlineDelete size={20} color="red" />
          </button>
        </div>
      ))}
    </div>
  );
}
