import { useForm } from "react-hook-form";
import type { Inputs } from "../../types";
import { useAddUser } from "./useAddUser";

type AddNewUserProps = {
  handleClose: () => void;
};

export default function AddNewUser({ handleClose }: AddNewUserProps) {
  const { isLoading, addNewUser } = useAddUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  function onSubmit(data: Inputs) {
    addNewUser(data, {
      onSuccess: () => {
        reset();
        handleClose();
      },
    });
  }
  return (
    <form
      className="bg-white px-4 py-10 rounded-lg border-2 w-[350px] md:w-[500px] lg:w-[650px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[#7F7E83]">
          Name
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            name is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="email" className="text-[#7F7E83]">
          Email
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            email is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4 ">
        <label htmlFor="image" className="text-[#7F7E83] ">
          Image
        </label>
        <input
          disabled={isLoading}
          type="file"
          className="file:border-none file:rounded-lg file:px-3 file:py-1.5 file input:cursor-pointer"
          {...register("image")}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="">
          status
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("status", { required: true })}
        >
          <option>admin</option>
          <option>user</option>
        </select>
        {errors.status && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            status is required
          </p>
        )}
      </div>
      <input
        disabled={isLoading}
        type="submit"
        className="mt-4 rounded-lg text-white bg-[#256ff1] px-6 py-2 cursor-pointer disabled:cursor-not-allowed"
      />
    </form>
  );
}
