import { Link } from "react-router";

export default function MenuMedium() {
  return (
    <div className="md:w-[100%] md:pt-4 md:flex md:flex-col md:gap-4">
      <div className="w-[100%]">
        <Link to="/admin">
          <button className=" w-[100%] flex gap-3  text-light-50  px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100">
            <img src="/home.svg" /> Dashboard
          </button>
        </Link>
      </div>{" "}
      <div className="w-[100%]">
        <Link to="/users">
          <button className=" w-[100%] flex gap-3  text-light-50  px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100">
            <img src="/users.svg" /> All Users
          </button>
        </Link>
      </div>{" "}
      <div className="w-[100%]">
        <Link to="/trips">
          <button className=" w-[100%] flex gap-3  text-light-50  px-4  py-3 rounded-lg text-gray-100 active:bg-primary-100 active:text-white hover:text-white hover:bg-primary-100">
            <img src="/itinerary.svg" /> AI Trips
          </button>
        </Link>
      </div>
    </div>
  );
}
