"use client";

import Image from "next/image";
import { useState } from "react";
import Profile from "./Profile/Profile";
import styles from "../../styles/GlobalLayout/Header.module.scss";
import BurgerMenu from "./BurgerMenu";

const HeaderTop = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCollapsedBurger, setIsCollapsedBurger] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
    setIsCollapsedBurger(!isCollapsedBurger);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <>
      <BurgerMenu
        handleBurgerClick={handleBurgerClick}
        isCollapsed={isCollapsedBurger}
      />
      <header className={styles.headerTopWrapper}>
        <span
          className={`hidden max-[950px]:block ${styles.burgerIcon} ${
            isActive ? styles.active : ""
          } z-10 order-0`}
          onClick={handleBurgerClick}
        />
        <div className={styles.headerLogo}>
          <Image src="/logo.svg" alt="logo" width={64} height={40} />
        </div>
        <div
          className={`flex rounded-full bg-[#F2F3F480] w-[240px] h-10 items-center pl-4 gap-3 border border-transparent duration-150 ${
            isFocused ? "border-black" : ""
          } max-[950px]:hidden`}
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
        <button className={styles.tokenIcon}>
          <div className="size-[26px] rounded-full bg-white flex items-center justify-center max-[600px]:size-5">
            <Image src="/Header/coin.svg" alt="coin" width={16} height={16} />
          </div>
          <div className={styles.tokenIcon_p}>
            1,924 <p className="max-[600px]:hidden">&nbsp;токенов</p>
          </div>
        </button>
        <div className="flex items-center gap-4 max-[950px]:order-3 max-[950px]:ml-auto">
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 flex justify-center items-center bg-[#D8D8D8] rounded-full"
          >
            <Image src="/Header/User.svg" alt="User" width={38} height={38} />
          </button>
        </div>
        <Profile isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </header>
    </>
  );
};

export default HeaderTop;
