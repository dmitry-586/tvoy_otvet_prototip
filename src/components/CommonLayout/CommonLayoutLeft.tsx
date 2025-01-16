"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "../../styles/GlobalLayout/CommonLayoutLeft.module.scss";

const CommonLayoutLeft = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <m.div
      initial={{ width: "var(--sidebar-expanded-width)" }}
      animate={{
        width: isCollapsed ? 63 : "var(--sidebar-expanded-width)",
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className={styles.CommonLayoutLeftWrapper}
    >
      <div
        className={`${styles.CommonLayoutLeft} ${
          isCollapsed ? "pl-0 justify-center" : "pl-6"
        } `}
      >
        <div className="flex items-center">
          <div className="flex gap-2 items-center">
            {!isCollapsed ? (
              <Image src="/logo.svg" alt="logo" width={68} height={46} />
            ) : (
              <Image src="/logoSmall.svg" alt="logo" width={28} height={26} />
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className={`w-4 h-7 border rounded-sm border-[#EFF0F6] flex justify-center items-center absolute right-[-8px] bg-white ${
              isCollapsed ? "rotate-180" : ""
            } duration-300 pr-[1px]`}
          >
            <Image
              src="/navMenu/arrowLeft.svg"
              width={6}
              height={10}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <NavMenu isCollapsed={isCollapsed} />
    </m.div>
  );
};

export default CommonLayoutLeft;
