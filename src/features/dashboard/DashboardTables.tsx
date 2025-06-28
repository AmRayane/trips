import TripBarchart from "./barchart/TripBarchart";
import UserBarchart from "./barchart/UserBarchart";

export default function DashboardTables() {
  return (
    <div className="grid grid-cols-1  pt-9 md:grid-cols-2 gap-6">
      <UserBarchart />
      <TripBarchart />
    </div>
  );
}
