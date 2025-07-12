import Allusers from "../features/users/Allusers";
import Pagination from "../ui/Pagination";
import { useUsers } from "../features/users/useUsers";
import Header from "../ui/Header";
import { MAX_PAGE } from "../types";
import UserBarInformation from "../ui/UserBarInformation";

export default function Users() {
  const { isLoading, data } = useUsers();
  if (isLoading) return;
  return (
    <div className="relative min-h-[calc(100vh-74px)] bg-light-300 px-8 pt-5">
      <Header
        title="Manage Users"
        buttonDescription="Add new users"
        description="Filter, sort, and access detailed user profiles"
        link="/form/userform"
      />
      <div className="mt-7 flex flex-col rounded-md bg-[#FFFFFF]">
        <UserBarInformation />
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
