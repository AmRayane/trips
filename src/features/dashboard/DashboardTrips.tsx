import { Link } from "react-router";
import BoxTrip from "../../ui/BoxTrip";
import { useTrips } from "../tirps/useTrips";
import type { Trip } from "../../types";
export default function DashboardTrips() {
  const { data } = useTrips();
  const trips: Trip[] | undefined = data?.trips.slice(0, 4);
  return (
    <div>
      <div>
        <h2 className="my-3 text-[20px] font-bold text-dark-100">Trips</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,269px)] gap-8">
        {trips?.map((trip) => (
          <Link to={`/admin/trips/${trip.$id}`}>
            <BoxTrip
              price={parseInt(trip.price)}
              image={trip.imageUrl}
              title={trip.name}
              location={trip.location}
              travelStyle={trip.travelStyle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
