import { Outlet } from "react-router";
import AsideBar from "./AsideBar";

export default function AdminLayout() {
  return (
    <div className="min-h-[100vh] divide-y divide-light-400 sm:grid md:grid-cols-[240px_auto] ">
      <AsideBar />
      <Outlet />
    </div>
  );
}
