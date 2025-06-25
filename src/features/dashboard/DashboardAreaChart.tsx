import ActiveUsersChart from "./areacharts/ActiveUsersChart";
import TripsGrowthChart from "./areacharts/TripsGrowthChart";
import UserGrowthChart from "./areacharts/UserGrowthChart";

export default function DashboardAreaChart() {
  return (
    <>
      <div className="grid gap-5 pt-8 grid-cols-[repeat(auto-fit,minmax(345px,auto))]">
        <UserGrowthChart />
        <TripsGrowthChart />
        <ActiveUsersChart />
      </div>
    </>
  );
}
