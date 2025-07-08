import Hero from "../features/user/Hero";
import UserFeatures from "../features/user/UserFeatures";
import UserTrips from "../features/user/UserTrips";

export default function ClientLayout() {
  return (
    <>
      <Hero />
      <UserFeatures />
      <UserTrips />
    </>
  );
}
