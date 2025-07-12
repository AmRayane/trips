import { useForm } from "react-hook-form";
import { RiGeminiFill } from "react-icons/ri";
import { useGeminiTrip } from "../tirps/useGeminiTrip";

type TripParams = {
  numberOfDays: number;
  country: string;
  budget: string;
  interests: string;
  travelStyle: string;
  groupType: string;
};
export default function GeminiForm() {
  const { isLoading, createGeminiTrip } = useGeminiTrip();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TripParams>();
  function onSubmit(data: TripParams) {
    createGeminiTrip(data);
  }
  return (
    <div className="flex h-[100vh] w-full items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-h-[1200px] w-[350px] flex-col gap-2 rounded-lg border-2 bg-white p-6 md:w-[500px] lg:w-[600px]"
      >
        <h1 className="text-[20px] font-bold capitalize text-dark-100">
          this form will allow you to create Trips using Gemini just fill the
          informations
        </h1>
        <div className="mt-2 flex flex-col gap-1">
          <label htmlFor="name" className="text-dark-100">
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

        <div className="mt-4 flex flex-col gap-1">
          <label htmlFor="duration" className="text-dark-100">
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

        <div className="mt-4 flex flex-col gap-1 text-dark-100">
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

        <div className="mt-4 flex flex-col gap-1 text-dark-100">
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
            <option>Friends</option>
            <option>Business</option>
          </select>
          {errors.groupType && (
            <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
              Group type is required
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-1 text-dark-100">
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

        <div className="mt-4 flex flex-col gap-1 text-dark-100">
          <label htmlFor="" className="">
            intersets Style
          </label>
          <select
            disabled={isLoading}
            defaultValue="user"
            className="block w-full min-w-0 grow rounded-lg border-2 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            {...register("interests", { required: true })}
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
          {errors.interests && (
            <p className="rounded-lg bg-[#ff543d4e] p-1 text-[#f13434]">
              interests is required
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#256ff1] px-4 py-1 text-white disabled:cursor-not-allowed"
        >
          <RiGeminiFill /> Create with gemini
        </button>
      </form>
    </div>
  );
}
