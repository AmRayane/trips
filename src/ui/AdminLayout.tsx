import { Outlet } from "react-router";
import AsideBar from "./AsideBar";
import User from "./User";

export default function AdminLayout() {
  return (
    <div className="min-h-[100vh] divide-y divide-light-400 sm:grid sm:grid-cols-[240px_auto] ">
      <AsideBar />
      <div className="px-6 pt-5 bg-light-100 min-h-[calc(100vh-74px)] ">
        <User />
        <Outlet />
      </div>
    </div>
  );
}
