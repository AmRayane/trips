import { FaArrowDown } from "react-icons/fa";

export default function TripsGrowthChart() {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col gap-6">
      <h2 className="text-dark-100 font-medium ]">Total Trips</h2>
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-3">3,210</h2>
          <div className="flex gap-2 ">
            <p className="flex items-center gap-1 text-red-100">
              <FaArrowDown />
              12%{" "}
            </p>
            <p className="text-gray-100"> vs last month</p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
