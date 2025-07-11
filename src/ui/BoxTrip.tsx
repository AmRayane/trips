import { FaLocationDot } from "react-icons/fa6";

type tripType = {
  price: number;
  image: string;
  title: string;
  location: string;
  travelStyle?: string;
  groupeType?: string;
};

export default function BoxTrip({ price, image, title, location }: tripType) {
  console.log(price);
  return (
    <div className="relative flex min-h-[260px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="absolute right-6 top-3 z-30 rounded-3xl bg-white px-3 py-[2px] font-semibold text-dark-100">
        ${price}
      </div>
      <div className="relative h-[155px] w-[100%]">
        <img className="h-[100%] w-[100%]" src={image} alt="" />
        <div className="absolute inset-0 z-10 bg-[#00000033]"></div>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-[16px] font-bold text-dark-100">{title}</p>
        <p className="flex items-center gap-2 text-[14px] text-[#7F7E83]">
          <FaLocationDot />
          {location}
        </p>
      </div>
    </div>
  );
}
