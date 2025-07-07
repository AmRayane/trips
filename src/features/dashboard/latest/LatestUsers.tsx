import { useLatestUsers } from "../UseLatestUsers";

export default function LatestUsers() {
  const { isLoading, data } = useLatestUsers();
  const users = data?.slice(0, 4);
  if (isLoading) return <p>data is loading</p>;
  return (
    <div className="mt-8 flex flex-col gap-6 rounded-xl bg-white p-10">
      <div className="divide-y-2">
        <h2 className="pb-3 text-[20px] font-semibold text-dark-100">
          Latest Users signups
        </h2>
        <div className="flex justify-between pt-3 text-[#7F7E83]">
          <p className="w-[70%]">NAME</p>
          <p className="w-[30%]">ITINERARY CREATED</p>
        </div>
      </div>
      {users?.map((user, i) => (
        <div
          className={`flex h-[60px] items-center justify-between ${
            i % 2 === 0 ? "bg-[#F9FBFC]" : ""
          }`}
        >
          <div className="flex w-[70%] items-center gap-3">
            <div className="w-10 overflow-hidden rounded-full">
              <img src={user.image} alt="" />
            </div>
            <p>{user.name}</p>
          </div>
          <div className="grow basis-1">5</div>
        </div>
      ))}
    </div>
  );
}
