import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { dashboardStats } from "../../../data";
const data = [
  {
    lastMonth: "1",
    numberofusers: dashboardStats.usersJoined.lastMonth,
  },
  {
    currentMonth: "2",
    numberofusers: dashboardStats.usersJoined.currentMonth,
  },
];

export default function UserGrowthChart() {
  const increasing = data[0].numberofusers < data[1].numberofusers;
  const percentage = Math.round(
    (data[0].numberofusers / data[1].numberofusers) * 100,
  );
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-5 shadow-sm">
      <h2 className="] font-medium text-dark-100">Total Users</h2>
      <div className="flex">
        <div className="flex-1">
          <h2 className="mb-3 text-4xl font-semibold">
            {dashboardStats.totalUsers}
          </h2>
          <div className="flex gap-2">
            <p
              className={`flex items-center gap-1 ${
                increasing ? "text-success-500" : "text-red-100"
              }`}
            >
              {increasing ? <FaArrowUp /> : <FaArrowDown />}
              {percentage}%
            </p>
            <p className="text-gray-100"> vs last month</p>
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey="numberofusers"
                fill={`${increasing ? "#12b76a" : "#ff543d"}`}
                stroke={`${increasing ? "#027a48" : "#b93815"}`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
