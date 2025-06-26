import TripBarchart from "./barchart/TripBarchart";
import UserBarchart from "./barchart/UserBarchart";

export default function DashboardTables() {
  return (
    <div>
      <UserBarchart />
      <TripBarchart />
    </div>
  );
}
