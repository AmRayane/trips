import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleNavigate(e: React.MouseEvent<HTMLAnchorElement>) {
    const name = e.currentTarget.dataset.name;
    if (name) {
      navigate(name);
    }
  }
  return (
    <>
      <div className="h-[30px] cursor-pointer " onClick={handleShowMenu}>
        <img src="/menu.svg" className="w-[100%] h-[100%] md:hidden" />
      </div>
      {showMenu ? (
        <div className="cursor-pointer absolute top-12 right-4 inline-block text-left">
          <div className="absolute   right-0 z-10 mt-2 w-[180px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
            <div className="py-1 divide-y divide-dark-100">
              <a
                data-name="/admin"
                className="block px-4 py-2 text-sm font-semibold  text-dark-100"
                onClick={(e) => {
                  handleShowMenu();
                  handleNavigate(e);
                }}
              >
                Dashboard
              </a>
              <a
                data-name="users"
                className="block px-4 py-2 text-sm font-semibold text-dark-100"
                onClick={(e) => {
                  handleShowMenu();
                  handleNavigate(e);
                }}
              >
                All Users
              </a>
              <a
                data-name="trips"
                className="block px-4 py-2 text-sm font-semibold text-dark-100"
                onClick={(e) => {
                  handleShowMenu();
                  handleNavigate(e);
                }}
              >
                AI Trips
              </a>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
