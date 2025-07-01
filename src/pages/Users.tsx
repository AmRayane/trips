import AddNewUser from "../features/users/AddNewUser";
import Allusers from "../features/users/Allusers";
import Pagination from "../features/users/Pagination";
import { useUsers } from "../features/users/useUsers";
import User from "../ui/User";

export default function Users() {
  const { isLoading } = useUsers();
  if (isLoading) return;
  return (
    <div className="relative px-8 pt-5 bg-light-300 min-h-[calc(100vh-74px)] ">
      <User
        title="Manage Users"
        buttonDescription="Add new users"
        description="Filter, sort, and access detailed user profiles"
      >
        <AddNewUser />
      </User>
      <div className="rounded-md flex flex-col bg-[#FFFFFF] mt-7">
        <div className="grid grid-cols-[25%_25%_15%_15%_17%_3%] px-5 py-4 text-[#7F7E83] ">
          <p>NAME</p>
          <p>EMAIL ADDRESS</p>
          <p>DATE JOINED</p>
          <p>ITINERARY CREATED</p>
          <p>STATUS</p>
          <p></p>
        </div>
        <Allusers />
        <Pagination />
      </div>
    </div>
  );
}
