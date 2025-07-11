import { useForm } from "react-hook-form";
import type { Trip } from "../../types";
import { useCreateSimpleTrip } from "../dashboard/useCreateSimpleTrip";

export default function CreateTrip() {
  const { isLoading, createTrip } = useCreateSimpleTrip();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Trip>();
  function onSubmit(data: Trip) {
    createTrip(data, {
      onSuccess: () => reset(),
    });
  }
  return (
    <form
      className="max-h-[700px] w-[350px] overflow-y-scroll rounded-lg border-2 bg-white px-4 py-10 md:w-[500px] lg:w-[650px]"
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
      <div className="mt-2 flex flex-col gap-2">
        <label htmlFor="name" className="text-[#7F7E83]">
          Country
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="country of trip"
          {...register("country", { required: true })}
        />
        {errors.country && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            country is required
          </p>
        )}
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label htmlFor="loation" className="text-[#7F7E83]">
          Location
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="location"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            location is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="duration" className="text-[#7F7E83]">
          Duration
        </label>
        <input
          disabled={isLoading}
          type="number"
          id="username"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Enter number of days (e.g ..5,12)"
          {...register("numberOfDays", { required: true })}
        />
        {errors.numberOfDays && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            duration is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="name" className="text-[#7F7E83]">
          Trip Price
        </label>
        <input
          disabled={isLoading}
          type="number"
          id="username"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="trip price"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            price is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-[#7F7E83]">
        <label htmlFor="" className="">
          Group Type
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("groupType", { required: true })}
        >
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Friend</option>
          <option>Business</option>
        </select>
        {errors.groupType && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            Group type is required
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2 text-[#7F7E83]">
        <label htmlFor="" className="">
          Travel Style
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("travelStyle", { required: true })}
        >
          <option>Relaxed</option>
          <option>Adventure</option>
          <option>Culture</option>
          <option>Luxury</option>
          <option>Nature & Outdoors</option>
          <option>City Exploration</option>
        </select>
        {errors.travelStyle && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            status is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-[#7F7E83]">
        <label htmlFor="" className="">
          intersets Style
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("intersets", { required: true })}
        >
          <option>Food & Culinary</option>
          <option>Hiking & Nature Walks</option>
          <option>Museums & Art</option>
          <option>Beaches & Water Activities</option>
          <option>Nightlife & Bars</option>
          <option>Photography Spots</option>
          <option>Shopping</option>
          <option>Local Experiences</option>
        </select>
        {errors.intersets && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            interests is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-[#7F7E83]">
        <label htmlFor="" className="">
          Budget Estimate
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("budget", { required: true })}
        >
          <option>Mid-Range</option>
          <option>Premium</option>
          <option>Luxury</option>
        </select>
        {errors.budget && (
          <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
            budget is required
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="image" className="text-[#7F7E83]">
          Image
        </label>
        <input
          disabled={isLoading}
          type="file"
          className="file input:cursor-pointer file:rounded-lg file:border-none file:px-3 file:py-1.5"
          {...register("image")}
        />
      </div>

      <input
        disabled={isLoading}
        type="submit"
        className="mt-4 cursor-pointer rounded-lg bg-[#256ff1] px-6 py-2 text-white disabled:cursor-not-allowed"
      />
    </form>
  );
}
