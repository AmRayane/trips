import { latestTrips } from "../../../data";
export default function LatestTrips() {
  return (
    <div className="mt-8 flex flex-col gap-6 rounded-xl bg-white p-10 shadow-sm">
      <div className="divide-y-2">
        <h2 className="pb-3 text-[20px] font-semibold text-dark-100">
          Latest Trips booking
        </h2>
        <div className="flex justify-between pt-3 text-[#7F7E83]">
          <p className="w-[70%]">BOOKING</p>
          <p className="w-[30%]">TRAVEL DATE</p>
        </div>
      </div>
      {latestTrips?.map((trip, i) => (
        <div
          className={`flex h-[60px] items-center justify-between ${
            i % 2 === 0 ? "bg-[#F9FBFC]" : ""
          }`}
        >
          <div className="flex w-[70%] items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img src={trip.image} alt="" className="h-[100%] w-[100%]" />
            </div>
            <p>{trip.name}</p>
          </div>
          <div className="grow basis-1">5</div>
        </div>
      ))}
    </div>
  );
}
