import CreateTrip from "../features/dashboard/CreateTrip";
import DashboardAreaChart from "../features/dashboard/DashboardAreaChart";
import DashboardLatest from "../features/dashboard/DashboardLatest";
import DashboardTables from "../features/dashboard/DashboardTables";
import DashboardTrips from "../features/dashboard/DashboardTrips";
import Header from "../ui/Header";

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-74px)] bg-light-300 px-8 pb-10 pt-5">
      <Header
        title="Welcome Admin"
        buttonDescription="Add new trips"
        description="Track activity, trends, and popular destinations in real time"
      >
        <CreateTrip />
      </Header>
      <DashboardAreaChart />
      <DashboardTrips />
      <DashboardTables />
      <DashboardLatest />
    </div>
  );
}
