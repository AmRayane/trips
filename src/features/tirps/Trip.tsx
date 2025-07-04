import { useParams } from "react-router";
import { useTrip } from "./useTrip";
import TripDetail from "../../ui/TripDetail";

export default function Trip() {
  const { tripId } = useParams<{ tripId: string }>();
  const { isLoading, trip } = useTrip(tripId ?? "");
  if (isLoading) return <p>fetching trip</p>;
  return (
    <div>
      <TripDetail
        numberOfDays={trip?.numberOfDays ?? ""}
        name={trip?.name ?? ""}
        interests={trip?.interests ?? ""}
        location={trip?.location ?? ""}
        image={trip?.imageUrl ?? ""}
        price={trip?.price ?? ""}
        travelStyle={trip?.travelStyle ?? ""}
        country={trip?.country ?? ""}
        description={trip?.description ?? ""}
        bestTimeToVisit={trip?.bestTimeToVisit ?? ""}
        itinerary={trip?.itinerary ?? ""}
      />
    </div>
  );
}
