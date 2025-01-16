"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Profile from "./Profile";

const HeaderTop = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="flex bg-white h-[72px] justify-between items-center py-4 px-10 relative">
      <div
        className={`flex rounded bg-[#F2F3F480] w-[240px] h-10 items-center pl-4 gap-3 border border-transparent duration-150 ${
          isFocused ? "border-black" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={0}
      >
        <Image
          src="/Header/MagnifyingGlass.svg"
          alt="search"
          width={20}
          height={20}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Поиск"
          className="bg-transparent h-full w-full text-sm outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <Image
            src="/Header/Notification.svg"
            alt="Notification"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={"/"}
          onClick={toggleSidebar}
          className="w-10 h-10 flex justify-center items-center bg-[#D8D8D8] rounded-full"
        >
          <Image src="/Header/User.svg" alt="User" width={38} height={38} />
        </Link>
      </div>
      <Profile isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default HeaderTop;
