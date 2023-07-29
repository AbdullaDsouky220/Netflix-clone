import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

const MobileMenu = () => {
  const [toggleMobileMenu, setToogleMobileMenu] = useState(false);
  const listItems = [
    "Home",
    "characters",
    "Films",
    "New &Popular",
    "Browse by languages",
    "My List",
  ];

  return (
    <div className="relative flex flex-row md:hidden">
      <div
        onClick={() => setToogleMobileMenu(!toggleMobileMenu)}
        className="flex flex-row  justify-center cursor-pointer relative items-center"
      >
        <h1 className="pr-2 text-sm">Browse</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {toggleMobileMenu && (
        <ul className="flex flex-col text-[11px] transition duration-100 -left-[50px] border-t-4  border-white absolute top-[40px] gap-3 text-center  pb-8  bg-zinc-900  bg-opacity-50">
          {listItems.map((item) => {
            return (
              <NavbarItem
                label={item}
                key={item}
                styles={
                  "hover:bg-zinc-800  min-w-[250px] transition cursor-pointer w-full px-16 py-4 "
                }
              />
            );
          })}
          <span className=" w-fit text-white-400 rotate-180 text-4xl absolute -top-7 left-[42%] ">
            ▾
          </span>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
