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
    admin: "bg-[#F2F4F7] text-[#344054] py-1 px-4   max-w-fit  rounded-3xl",
    user: "bg-[#ECFDF3] text-[#027A48] py-1 px-4 max-w-fit rounded-3xl",
  };
  return (
    <div className="  ">
      {data?.users?.map((user, index) => (
        <div
          className={`grid grid-cols-[40%_40%_17%_3%]  items-center md:grid-cols-[25%_25%_15%_15%_17%_3%] px-5 py-4 ${
            index % 2 === 0 ? "bg-[#F9FBFC]" : ""
          }`}
        >
          <div className="flex  gap-3 items-center">
            <div className="flex overflow-hidden rounded-full items-center justify-center">
              <img
                src={user.image}
                alt="user image"
                className="w-[40px] h-[40px]"
              />
            </div>
            <p className="font-bold">{user.name}</p>
          </div>
          <p>{user.email}</p>
          <p className="hidden md:block">{fomatDate(user.$createdAt)}</p>
          <p className="hidden md:block">{Math.ceil(Math.random() * 10)}</p>
          <p
            className={
              user.status == "admin" ? statusStyle.admin : statusStyle.user
            }
          >
            {user.status}
          </p>
          <button
            onClick={() =>
              toast((t) => (
                <span className="flex gap-2">
                  <p>Sure want to delete user ?</p>
                  <button
                    className="p-2 bg-red-500 text-white rounded-md"
                    onClick={() => {
                      handleDeleteUser(user);
                      toast.dismiss(t.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-600 text-white rounded-md"
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
