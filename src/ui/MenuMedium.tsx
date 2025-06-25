import { FaHome, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function MenuMedium() {
  const navigate = useNavigate();
  return (
    <div className="hidden  md:w-[100%] md:pt-4 md:flex md:flex-col md:gap-4">
      <div className="w-[100%]">
        <button
          onClick={() => navigate("/admin")}
          className=" w-[100%] flex gap-3  text-light-50  items-center px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100"
        >
          <FaHome />
          Dashboard
        </button>
      </div>{" "}
      <div className="w-[100%]">
        <button
          onClick={() => navigate("/admin/users")}
          className=" w-[100%] flex gap-3 items-center  text-light-50  px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100"
        >
          <FaUserGroup />
          All Users
        </button>
      </div>{" "}
      <div className="w-[100%]">
        <button
          onClick={() => navigate("/admin/trips")}
          className=" w-[100%] flex gap-3  text-light-50 items-center  px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100"
        >
          <FaMap />
          AI Trips
        </button>
      </div>
    </div>
  );
}
