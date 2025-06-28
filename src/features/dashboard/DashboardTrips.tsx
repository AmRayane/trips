import BoxTrip from "../../ui/BoxTrip";
import { dashboardTrips } from "../../data";
export default function DashboardTrips() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-dark-100 text-[20px] my-3">Trips</h2>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(256px,auto))]">
        {dashboardTrips.map((trip) => (
          <BoxTrip
            price={trip.price}
            image={trip.image}
            title={trip.title}
            location={trip.location}
          />
        ))}
      </div>
    </div>
  );
}
