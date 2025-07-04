import BoxTrip from "../../ui/BoxTrip";
import { dashboardTrips } from "../../data";
export default function DashboardTrips() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-dark-100 text-[20px] my-3">Trips</h2>
      </div>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,269px)]">
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
