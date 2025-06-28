import LatestTrips from "./latest/LatestTrips";
import LatestUsers from "./latest/LatestUsers";

export default function DashboardLatest() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LatestUsers />
      <LatestTrips />
    </div>
  );
}
