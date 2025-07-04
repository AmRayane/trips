import { Link } from "react-router";
import BoxTrip from "../../ui/BoxTrip";
import { useTrips } from "./useTrips";
import Pagination from "../../ui/Pagination";
import { MAX_TRIPS_PAGE, type Trip } from "../../types";

export default function AiTrip() {
  const { isLoading, data } = useTrips();
  if (isLoading) <p>data is loading</p>;
  return (
    <div className="px-1 pb-4 pt-6">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 border-b-[1px] border-b-gray-200 pb-8">
        {data?.trips.map((trip: Trip) => (
          <Link to={`/admin/trips/${trip.$id}`}>
            <BoxTrip
              price={parseInt(trip.price)}
              image={trip.imageUrl}
              title={trip.name}
              location={trip.location}
              travelStyle={trip.travelStyle}
              groupeType={trip.groupeType}
            />
          </Link>
        ))}
      </div>
      <Pagination
        isLoading={isLoading}
        max_page={MAX_TRIPS_PAGE}
        total={data?.total ?? 0}
      />
    </div>
  );
}
