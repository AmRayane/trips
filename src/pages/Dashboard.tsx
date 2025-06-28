import DashboardAreaChart from "../features/dashboard/DashboardAreaChart";
import DashboardLatest from "../features/dashboard/DashboardLatest";
import DashboardTables from "../features/dashboard/DashboardTables";
import DashboardTrips from "../features/dashboard/DashboardTrips";
import User from "../ui/User";

export default function Dashboard() {
  return (
    <div className="px-8 pt-5 pb-10 bg-light-300 min-h-[calc(100vh-74px)] ">
      <User
        title="Welcome user"
        buttonDescription="Add new trips"
        description="Track activity, trends, and popular destinations in real time"
      />
      <DashboardAreaChart />
      <DashboardTrips />
      <DashboardTables />
      <DashboardLatest />
    </div>
  );
}
