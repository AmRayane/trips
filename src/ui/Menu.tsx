import { useState } from "react";
import { FaHome, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";

import Button from "./Button";
import Logout from "../features/Auth/Logout";

export default function Menu() {
  const [showBar, setShowBar] = useState<boolean>(false);
  function handleAsideBar() {
    setShowBar(!showBar);
  }

  return (
    <>
      <div
        className={`${showBar ? "absolute left-0 top-[74px] z-10 h-[100vh] w-[280px] rounded-none bg-white px-6 py-8" : "hidden"} md:flex md:w-full md:flex-col md:gap-4 md:pt-4`}
      >
        <Button
          link="/admin/dashboard"
          action={handleAsideBar}
          showbar={showBar}
        >
          <FaHome />
          Dashboard
        </Button>
        <Button link="/admin/users" action={handleAsideBar} showbar={showBar}>
          <FaUserGroup />
          All Users
        </Button>
        <Button link="/admin/trips" action={handleAsideBar} showbar={showBar}>
          <FaMap />
          AI Trips
        </Button>
        <Button link="/client" action={handleAsideBar} showbar={showBar}>
          <FaEye />
          View Website
        </Button>
        <div>
          <Logout />
        </div>
      </div>

      <div className="cursor-pointer md:hidden" onClick={handleAsideBar}>
        {showBar ? <HiOutlineXMark size={24} /> : <GiHamburgerMenu size={20} />}
      </div>
    </>
  );
}
