import { FaLocationDot } from "react-icons/fa6";

type tripType = {
  price: number;
  image: string;
  title: string;
  location: string;
  proprties?: [];
};

export default function BoxTrip({
  price,
  image,
  title,
  location,
  proprties = [],
}: tripType) {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-3xl bg-white cursor-pointer
    "
    >
      <div className="absolute top-3 right-6 bg-white py-[2px] font-semibold text-dark-100 px-5 rounded-3xl">
        ${price}
      </div>
      <div className="w-[100%] h-[180px]">
        <img className="w-[100%] h-[100%]" src={image} alt="" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <p className="text-[16px] font-bold text-dark-100">{title}</p>
        <p className="flex items-center gap-2 text-[#7F7E83]">
          <FaLocationDot />
          {location}
        </p>
        <p>{proprties}</p>
      </div>
    </div>
  );
}
