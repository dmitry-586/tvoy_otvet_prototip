"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      <m.div
        initial={{ width: 230 }}
        animate={{ width: isCollapsed ? 63 : 230 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
      >
        <div
          className={`relative h-[72px] flex items-center border border-[#EFF0F6] pl-3 bg-white`}
        >
          <div className="flex">
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 bg-[#EFF0F6] rounded-[4px]" />
              <h1
                className={`leading-none text-sm font-bold ${
                  isCollapsed ? "hidden" : ""
                }`}
              >
                Твой
                <br />
                Ответ
              </h1>
            </div>
            <button
              onClick={toggleSidebar}
              className={`w-4 h-7 border rounded-sm border-[#EFF0F6] flex justify-center items-center absolute right-[-8px] bg-white ${
                isCollapsed ? "rotate-180" : ""
              } duration-300 z-10`}
            >
              <Image
                src="/navMenu/arrowLeft.svg"
                width={6}
                height={9}
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <NavMenu isCollapsed={isCollapsed} />
      </m.div>
    </div>
  );
};

export default Header;
