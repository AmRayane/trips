import AddNewUser from "../features/users/AddNewUser";
import Allusers from "../features/users/Allusers";
import Pagination from "../ui/Pagination";
import { useUsers } from "../features/users/useUsers";
import Header from "../ui/Header";
import { MAX_PAGE } from "../types";

export default function Users() {
  const { isLoading, data } = useUsers();
  if (isLoading) return;
  return (
    <div className="relative min-h-[calc(100vh-74px)] bg-light-300 px-8 pt-5">
      <Header
        title="Manage Users"
        buttonDescription="Add new users"
        description="Filter, sort, and access detailed user profiles"
      >
        <AddNewUser />
      </Header>
      <div className="mt-7 flex flex-col rounded-md bg-[#FFFFFF]">
        <div className="grid grid-cols-[40%_40%_17%_3%] px-5 py-4 text-[#7F7E83] md:grid-cols-[25%_25%_15%_15%_17%_3%]">
          <p>NAME</p>
          <p>EMAIL ADDRESS</p>
          <p className="hidden md:block">DATE JOINED</p>
          <p className="hidden md:block">ITINERARY CREATED</p>
          <p>STATUS</p>
          <p></p>
        </div>
        <Allusers />
        <Pagination
          total={data?.total ?? 0}
          max_page={MAX_PAGE}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
