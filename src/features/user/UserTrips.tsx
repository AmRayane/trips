import AiTrip from "../tirps/AiTrip";

export default function UserTrips() {
  return (
    <div className="py-small-y md:py-large-y px-mobile sm:px-tablet md:px-desktop">
      <h1 className="text-[25px] font-bold text-dark-100 md:text-[36px]">
        Handpicked Trips
      </h1>
      <p className="text-gray-100">
        Browse well-planned trips designed for different travel styles and
        interests
      </p>
      <AiTrip />
    </div>
  );
}
