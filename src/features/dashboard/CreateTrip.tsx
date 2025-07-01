import { useForm } from "react-hook-form";
import type { SimpleTrip } from "../../types";
import { useCreateSimpleTrip } from "./useCreateSimpleTrip";

export default function CreateTrip() {
  const { isLoading, createTrip } = useCreateSimpleTrip();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SimpleTrip>();
  function onSubmit(data: SimpleTrip) {
    createTrip(data, {
      onSuccess: () => reset(),
    });
  }
  return (
    <form
      className="bg-white px-4 py-10 rounded-lg max-h-[700px] overflow-y-scroll border-2 w-[350px] md:w-[500px] lg:w-[650px]"
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
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="name" className="text-[#7F7E83]">
          Country
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="country of trip"
          {...register("country", { required: true })}
        />
        {errors.country && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            country is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="loation" className="text-[#7F7E83]">
          Location
        </label>
        <input
          disabled={isLoading}
          type="text"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="location"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            location is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="duration" className="text-[#7F7E83]">
          Duration
        </label>
        <input
          disabled={isLoading}
          type="number"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Enter number of days (e.g ..5,12)"
          {...register("numberOfDays", { required: true })}
        />
        {errors.numberOfDays && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            duration is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="name" className="text-[#7F7E83]">
          Trip Price
        </label>
        <input
          disabled={isLoading}
          type="number"
          id="username"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="trip price"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            price is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4 text-[#7F7E83]">
        <label htmlFor="" className="">
          Group Type
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("groupType", { required: true })}
        >
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Friend</option>
          <option>Business</option>
        </select>
        {errors.groupType && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            Group type is required
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-4 text-[#7F7E83]">
        <label htmlFor="" className="">
          Travel Style
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
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
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            status is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4 text-[#7F7E83]">
        <label htmlFor="" className="">
          Travel Style
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
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
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            interests is required
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-4 text-[#7F7E83]">
        <label htmlFor="" className="">
          Budget Estimate
        </label>
        <select
          disabled={isLoading}
          defaultValue="user"
          className="block min-w-0 w-full border-2 rounded-lg grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          {...register("budget", { required: true })}
        >
          <option>Mid-Range</option>
          <option>Premium</option>
          <option>Luxury</option>
        </select>
        {errors.budget && (
          <p className="p-1 bg-[#ff543d4e] text-[#f13434] rounded-lg">
            budget is required
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

      <input
        disabled={isLoading}
        type="submit"
        className="mt-4 rounded-lg text-white bg-[#256ff1] px-6 py-2 cursor-pointer disabled:cursor-not-allowed"
      />
    </form>
  );
}
