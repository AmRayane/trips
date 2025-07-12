import { useForm } from "react-hook-form";
import type { Inputs } from "../../types";
import { useAddUser } from "../users/useAddUser";

export default function AddNewUser() {
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
      },
    });
  }
  return (
    <div className="flex h-[100vh] items-center">
      <form
        className="mx-auto max-w-[1200px] rounded-lg border-2 bg-white px-4 py-10 md:w-[500px] lg:w-[650px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-dark-100">
            Name
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="username"
            className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
              name is required
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="email" className="text-dark-100">
            Email
          </label>
          <input
            disabled={isLoading}
            type="text"
            id="username"
            className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
              email is required
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="image" className="text-dark-100">
            Image
          </label>
          <input
            disabled={isLoading}
            type="file"
            className="file input:cursor-pointer file:rounded-lg file:border-none file:px-3 file:py-1.5"
            {...register("image")}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="" className="">
            status
          </label>
          <select
            disabled={isLoading}
            defaultValue="user"
            className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            {...register("status", { required: true })}
          >
            <option>admin</option>
            <option>user</option>
          </select>
          {errors.status && (
            <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
              status is required
            </p>
          )}
        </div>
        <input
          disabled={isLoading}
          type="submit"
          className="mt-4 cursor-pointer rounded-lg bg-[#256ff1] px-6 py-2 text-white disabled:cursor-not-allowed"
        />
      </form>
    </div>
  );
}
