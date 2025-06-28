import { useUsers } from "../features/users/useUsers";
import User from "../ui/User";

export default function Users() {
  const { data } = useUsers();
  console.log(data);
  return (
    <div className="px-8 pt-5 bg-light-300 min-h-[calc(100vh-74px)] ">
      <User
        title="Manage Users"
        buttonDescription="Add new users"
        description="Filter, sort, and access detailed user profiles"
      />
      <div>dashboard</div>
    </div>
  );
}
