import { gradientColors } from "../types";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useGetUser } from "../features/Auth/useGetUser";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

type TripDetailProps = {
  country: string;
  numberOfDays: string;
  name: string;
  travelStyle: string;
  budget: string;
  price: string;
  image: string;
  location: string;
  interests: string;
  groupType: string;
  description: string;
  bestTimeToVisit: string;
  itinerary: string;
};

export default function TripDetail({
  numberOfDays,
  name,
  interests,
  travelStyle,
  location,
  image,
  price,
  country,
  description,
  bestTimeToVisit,
  itinerary,
}: TripDetailProps) {
  const randomOne: number = Math.ceil(Math.random() * 11);
  const randomTwo: number = Math.ceil(Math.random() * 11);
  const navigate = useNavigate();
  const { user } = useGetUser();
  const status: string = user?.status;

  return (
    <div className="px-4 md:px-24 lg:px-[330px]">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-y-4 pb-12 pt-4 md:pt-10 lg:mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-[10%] flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[16px] font-semibold shadow-xl"
        >
          <FaArrowLeft />
          Go Back
        </button>
        <h1 className="text-[20px] font-bold md:text-[25px] lg:text-[35px]">
          {name} : {interests}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#7F7E83] lg:text-[18px]">
            <HiMiniCalendarDateRange /> {numberOfDays} day plan
          </div>
          <div className="flex items-center gap-2 text-[#7F7E83] lg:text-[18px]">
            <IoLocationOutline /> {location}
          </div>
        </div>
        <div className="relative flex w-[300px] content-center items-center overflow-hidden rounded-xl md:w-[450px] lg:h-[308px] lg:w-[600px]">
          <img src={image} className="h-[100%] w-[100%]" alt="" />
          <div className="absolute inset-0 z-10 bg-[#0000003e]"></div>
        </div>
        <div className="flex items-center gap-3">
          <span
            style={{
              backgroundColor: gradientColors[randomOne].background,
              color: gradientColors[randomOne].text,
            }}
            className={`rounded-[40px] px-4 py-1`}
          >
            {interests}
          </span>
          <span
            style={{
              backgroundColor: gradientColors[randomTwo].background,
              color: gradientColors[randomTwo].text,
            }}
            className={`rounded-[40px] px-4 py-1`}
          >
            {travelStyle}
          </span>
          <span className="flex">
            <FaStar color="#FFC542" />
            <FaStar color="#FFC542" />
            <FaStar color="#FFC542" />
            <FaStar color="#FFC542" />
            <FaStar color="#FFC542" />
          </span>
        </div>
        <div className="flex flex-col gap-y-12">
          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-[18px] font-bold leading-[45px] md:text-[20px] lg:text-[25px]">
                  {numberOfDays}-Days in {country}
                </h3>
                <h4 className="mt-2 text-[#7F7E83]">
                  {interests},{travelStyle}
                </h4>
              </div>
              <div>
                <p className="rounded-3xl bg-white px-3 py-1 shadow-xl">
                  ${price}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 leading-[35px] text-[#2E2C48]">
              {description}
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            {JSON.parse(itinerary).map((item) => (
              <div>
                <p className="text-[20px] font-semibold text-[#2E2C48]">
                  day {item.day} in {item.location} :
                </p>
                <div className="flex flex-col gap-3 pl-6 pt-[6px]">
                  {item.activities.map((activity) => (
                    <li className="leading-[35px]">
                      <span className="font-medium"> {activity.time} : </span>{" "}
                      {activity.description}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-3 text-[20px] font-bold text-[#2E2C48]">
              Best Time to Visit:
            </p>
            <div className="flex flex-col gap-3">
              {JSON.parse(bestTimeToVisit).map((perioud: string) => (
                <li className="leading-[30px]">{perioud}</li>
              ))}
            </div>
          </div>
          <div>map</div>
        </div>
        {status === "client" && (
          <button className="cursor-pointer rounded-xl bg-[#256FF1] py-2 text-white">
            Pay and join trip{" "}
            <span className="ml-2 rounded-3xl bg-white px-3 py-1 text-black">
              ${price}
            </span>
          </button>
        )}
        {status === "admin" && (
          <button className="cursor-pointer rounded-xl bg-red-600 py-2 text-white">
            Delete trip{" "}
          </button>
        )}
      </div>
    </div>
  );
}
