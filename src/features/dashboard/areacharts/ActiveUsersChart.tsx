import { FaArrowUp } from "react-icons/fa";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function ActiveUsersChart() {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col gap-6">
      <h2 className="text-dark-100 font-medium ]">Active user today</h2>
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-3">520</h2>
          <div className="flex gap-2 ">
            <p className="flex items-center gap-1 text-success-500">
              <FaArrowUp />
              12%{" "}
            </p>
            <p className="text-gray-100"> vs last month</p>
          </div>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey="uv"
                fill="#12b76a"
                stroke="#027a48"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
