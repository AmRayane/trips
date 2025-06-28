import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { userGrowth } from "../../../data";
const data = userGrowth;

export default function TripBarchart() {
  return (
    <div className="rounded-2xl bg-white p-6 divide-y-2">
      <h1 className="text-dark-100 text-[20px] font-semibold pl-6 pb-3">
        Trips trend
      </h1>
      <div className="h-[250px] pt-3">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width={500} height={300} data={data}>
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Bar
              dataKey="numberOfUsers"
              barSize={30}
              fill="#E5EAFC"
              activeBar={{ fill: "#4A3AFF" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
