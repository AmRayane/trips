import { latestTrips } from "../../../data";
export default function LatestTrips() {
  return (
    <div className="bg-white p-10   rounded-xl flex flex-col  gap-6 mt-8">
      <div className="divide-y-2 ">
        <h2 className="text-dark-100 text-[20px] font-semibold pb-3">
          Latest Trips booking
        </h2>
        <div className="flex justify-between pt-3 text-[#7F7E83]">
          <p className="w-[70%]">BOOKING</p>
          <p className="w-[30%]">TRAVEL DATE</p>
        </div>
      </div>
      {latestTrips?.map((trip, i) => (
        <div
          className={`flex justify-between items-center h-[60px] ${
            i % 2 === 0 ? "bg-[#F9FBFC]" : ""
          }`}
        >
          <div className="flex w-[70%] items-center gap-3">
            <div className="w-10 h-10  rounded-full overflow-hidden">
              <img src={trip.image} alt="" className="h-[100%] w-[100%]" />
            </div>
            <p>{trip.name}</p>
          </div>
          <div className="basis-1 grow">5</div>
        </div>
      ))}
    </div>
  );
}
