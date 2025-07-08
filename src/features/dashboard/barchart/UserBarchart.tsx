import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { userGrowth } from "../../../data";
const data = userGrowth;

export default function UserBarchart() {
  return (
    <div className="divide-y-2 rounded-2xl bg-white p-6 shadow-sm">
      <h1 className="pb-3 text-[20px] font-semibold text-dark-100">
        User growth
      </h1>
      <div className="h-[250px] pt-3">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width={500} height={300} data={data}>
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Bar dataKey="numberOfUsers" barSize={30} fill="#4784EE" />
            <Line type="monotone" dataKey="numberOfUsers" stroke="#256FF1" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
