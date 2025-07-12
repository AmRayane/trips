import AiTrip from "../tirps/AiTrip";

export default function UserTrips() {
  return (
    <div className="px-mobile py-small-y sm:px-tablet md:px-desktop md:py-large-y">
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
